"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Form, Input, Typography, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

const { Title, Text } = Typography;

export default function AuthRegister() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values: any) => {
        setLoading(true);
        const { email, password, confirmPassword } = values;

        if (password !== confirmPassword) {
            message.error("Mật khẩu nhập lại không khớp.");
            setLoading(false);
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

            if (!res.ok) throw new Error(data.message || "Đăng ký thất bại.");

            router.push("/auth/login");
        } catch (err: any) {
            message.error(err.message);
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
                <div className="flex justify-center mb-6">
                    <Image src="/logo/logo.jpg" alt="Logo" width={70} height={70} />
                </div>

                <Title level={4} className="text-center mb-6">
                    Đăng ký tài khoản
                </Title>

                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: "Vui lòng nhập email" },
                            { type: "email", message: "Email không hợp lệ" },
                        ]}
                    >
                        <Input placeholder="Email của bạn" />
                    </Form.Item>

                    <Form.Item
                        label="Mật khẩu"
                        name="password"
                        rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
                    >
                        <Input.Password
                            placeholder="Mật khẩu"
                            iconRender={(visible) =>
                                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                            }
                        />
                    </Form.Item>

                    <Form.Item
                        label="Nhập lại mật khẩu"
                        name="confirmPassword"
                        rules={[{ required: true, message: "Vui lòng nhập lại mật khẩu" }]}
                    >
                        <Input.Password
                            placeholder="Nhập lại mật khẩu"
                            iconRender={(visible) =>
                                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                            }
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={loading}
                            className="w-full"
                        >
                            Đăng ký
                        </Button>
                    </Form.Item>
                </Form>

                <div className="text-center mt-4">
                    <Text type="secondary">
                        Đã có tài khoản?{" "}
                        <Link href="/auth/login" className="text-blue-600">
                            Đăng nhập
                        </Link>
                    </Text>
                </div>
            </div>
        </div>
    );
}
