"use client";

import { AuthService } from "@/lib/api/auth.service";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useAuth() {
    const { data: session, status, update } = useSession();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Đăng nhập sử dụng Auth.js
    const login = async (email: string, password: string) => {
        setLoading(true);
        setError(null);

        try {
            const result = await signIn("credentials", {
                redirect: false,
                email,
                password,
            });

            if (result?.error) {
                setError(result.error);
                return false;
            }

            return true;
        } catch (err) {
            setError("Đã xảy ra lỗi khi đăng nhập");
            return false;
        } finally {
            setLoading(false);
        }
    };

    // Đăng ký sử dụng AuthService
    const register = async (userData: any) => {
        setLoading(true);
        setError(null);

        try {
            await AuthService.register(userData);

            // Tự động đăng nhập sau khi đăng ký
            return await login(userData.email, userData.password);
        } catch (err: any) {
            setError(err.message || "Đã xảy ra lỗi khi đăng ký");
            return false;
        } finally {
            setLoading(false);
        }
    };

    // Đăng xuất
    const logout = async () => {
        await signOut({ redirect: false });
        router.push("/");
    };

    // Làm mới thông tin người dùng
    const refreshUserData = async () => {
        if (session?.user?.accessToken) {
            try {
                const userData = await AuthService.getUserProfile(session.user.accessToken);
                // Cập nhật session với dữ liệu mới
                await update({
                    ...session,
                    user: {
                        ...session.user,
                        ...userData,
                    },
                });
            } catch (err) {
                console.error("Failed to refresh user data:", err);
            }
        }
    };

    return {
        session,
        status,
        isAuthenticated: status === "authenticated",
        isLoading: status === "loading" || loading,
        error,
        login,
        register,
        logout,
        refreshUserData,
    };
}