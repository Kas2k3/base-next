"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Box, Typography, TextField, Button, Link, Paper, Container,
    IconButton, Snackbar, Alert
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Image from "next/image";

export default function AuthRegister() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isErrorEmail, setIsErrorEmail] = useState(false);
    const [isErrorPassword, setIsErrorPassword] = useState(false);
    const [isErrorConfirm, setIsErrorConfirm] = useState(false);
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirm, setErrorConfirm] = useState("");
    const [openMessage, setOpenMessage] = useState(false);
    const [resMessage, setResMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorEmail("");
        setErrorPassword("");
        setErrorConfirm("");
        setIsErrorEmail(false);
        setIsErrorPassword(false);
        setIsErrorConfirm(false);

        if (!email) {
            setIsErrorEmail(true);
            setErrorEmail("Email không được để trống.");
            setIsLoading(false);
            return;
        }

        if (!password) {
            setIsErrorPassword(true);
            setErrorPassword("Mật khẩu không được để trống.");
            setIsLoading(false);
            return;
        }

        if (password !== confirmPassword) {
            setIsErrorConfirm(true);
            setErrorConfirm("Mật khẩu nhập lại không khớp.");
            setIsLoading(false);
            return;
        }

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
                credentials: "include",
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Đăng ký thất bại.");
            }

            router.push("/auth/login");
        } catch (err: any) {
            setOpenMessage(true);
            setResMessage(err.message);
            setIsErrorEmail(true);
            setIsErrorPassword(true);
        }

        setIsLoading(false);
    };

    return (
        <Container maxWidth="sm" sx={{ py: 8 }}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: "8px" }}>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                    <Image src="/logo/logo.jpg" alt="Vietnam Innovation Gateway" width={70} height={70} />
                </Box>

                <Box component="form" onSubmit={handleSubmit} noValidate>
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
                            Email
                        </Typography>
                        <TextField
                            required fullWidth id="email" name="email"
                            autoComplete="email"
                            error={isErrorEmail}
                            helperText={errorEmail}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant="outlined"
                            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "4px" } }}
                        />
                    </Box>

                    <Box sx={{ mb: 2 }}>
                        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
                            Mật khẩu
                        </Typography>
                        <TextField
                            required fullWidth id="password" name="password"
                            autoComplete="new-password"
                            type={showPassword ? "text" : "password"}
                            error={isErrorPassword}
                            helperText={errorPassword}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            variant="outlined"
                            slotProps={{
                                input: {
                                    endAdornment: (
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleTogglePassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    )
                                }
                            }}
                            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "4px" } }}
                        />
                    </Box>

                    <Box sx={{ mb: 3 }}>
                        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
                            Nhập lại mật khẩu
                        </Typography>
                        <TextField
                            required fullWidth id="confirmPassword" name="confirmPassword"
                            autoComplete="new-password"
                            type={showPassword ? "text" : "password"}
                            error={isErrorConfirm}
                            helperText={errorConfirm}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            variant="outlined"
                            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "4px" } }}
                        />
                    </Box>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={isLoading}
                        sx={{
                            py: 1.5,
                            mb: 2,
                            borderRadius: "4px",
                            textTransform: "none",
                            fontSize: "1rem",
                        }}
                    >
                        {isLoading ? "Đang đăng ký..." : "Đăng ký"}
                    </Button>

                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="body2" color="text.secondary">
                            Đã có tài khoản?{" "}
                            <Link
                                href="/auth/login"
                                sx={{
                                    color: "primary.main",
                                    textDecoration: "none",
                                    fontWeight: 500,
                                    "&:hover": { textDecoration: "underline" }
                                }}
                            >
                                Đăng nhập
                            </Link>
                        </Typography>
                    </Box>

                    <Snackbar
                        open={openMessage}
                        autoHideDuration={5000}
                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    >
                        <Alert severity="error" sx={{ width: "100%" }}>
                            {resMessage}
                        </Alert>
                    </Snackbar>
                </Box>
            </Paper>
        </Container>
    );
}
