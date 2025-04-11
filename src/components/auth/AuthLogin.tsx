"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import {
    Button,
    Checkbox,
    Form,
    Input,
    Typography,
    message,
} from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

const { Title, Text } = Typography;

const AuthLogin = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values: any) => {
        setLoading(true);
        const res = await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
        });

        if (!res?.error) {
            router.push("/");
        } else {
            message.error("Sai email hoặc mật khẩu");
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
                    Đăng nhập tài khoản
                </Title>

                <Form
                    name="login"
                    layout="vertical"
                    onFinish={onFinish}
                    initialValues={{ remember: true }}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: "Vui lòng nhập email" }]}
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

                    <div className="flex items-center justify-between mb-4">
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Ghi nhớ đăng nhập</Checkbox>
                        </Form.Item>
                        <Link href="/auth/forgot-password" className="text-blue-600 text-sm">
                            Quên mật khẩu?
                        </Link>
                    </div>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="w-full"
                            loading={loading}
                        >
                            Đăng nhập
                        </Button>
                    </Form.Item>
                </Form>

                <div className="text-center">
                    <Text type="secondary">
                        Chưa có tài khoản?{" "}
                        <Link href="/auth/register" className="text-blue-600">
                            Đăng ký
                        </Link>
                    </Text>
                </div>
            </div>
        </div>
    );
};

export default AuthLogin;
