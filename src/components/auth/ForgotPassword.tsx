'use client'
import { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import Image from 'next/image';

const ForgotPasswordPage = () => {
    const [loading, setLoading] = useState(false);

    const onFinish = (values: { email: string }) => {
        setLoading(true);

        message.success("Liên kết đặt lại mật khẩu đã được gửi tới email.");

        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
                <div className="flex justify-center mb-6">
                    <Image src="/logo/logo.jpg" alt="Logo" width={70} height={70} />
                </div>

                <h4 className="text-center mb-2">
                    Quên mật khẩu
                </h4>

                <p className="text-center text-gray-500 mb-6">
                    Nhập địa chỉ email bạn đã đăng ký. Chúng tôi sẽ gửi liên kết để đặt lại mật khẩu.
                </p>

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
};

export default ForgotPasswordPage;
