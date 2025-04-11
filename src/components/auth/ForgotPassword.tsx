"use client";

import { useState } from "react";
import { Form, Input, Button, Typography, message } from "antd";
import Image from "next/image";

const { Title, Text } = Typography;

export default function ForgotPassword() {
    const [loading, setLoading] = useState(false);

    const onFinish = async (values: { email: string }) => {
        const { email } = values;
        setLoading(true);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
                credentials: "include",
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message || "Gửi yêu cầu thất bại.");

            message.success("Liên kết đặt lại mật khẩu đã được gửi tới email.");
        } catch (err: any) {
            message.error(err.message || "Có lỗi xảy ra.");
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
                <div className="flex justify-center mb-6">
                    <Image src="/logo/logo.jpg" alt="Logo" width={70} height={70} />
                </div>

                <Title level={4} className="text-center mb-2">
                    Quên mật khẩu
                </Title>

                <Text type="secondary" className="block text-center mb-6">
                    Nhập địa chỉ email bạn đã đăng ký. Chúng tôi sẽ gửi liên kết để đặt lại mật khẩu.
                </Text>

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

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={loading}
                            className="w-full"
                        >
                            Gửi liên kết đặt lại mật khẩu
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
