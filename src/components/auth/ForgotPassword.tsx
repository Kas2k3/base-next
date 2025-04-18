'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import Image from 'next/image';
import BackButton from '../button/BackButton';

const ForgotPasswordPage = () => {
    const t = useTranslations('forgotPassword');
    const [loading, setLoading] = useState(false);

    const onFinish = (values: { email: string }) => {
        setLoading(true);
        message.success(t('submit'));
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
                <BackButton />
                <div className="flex justify-center mb-6">
                    <Image src="/logo/logo.jpg" alt="Logo" width={70} height={70} />
                </div>

                <h4 className="text-center mb-2">{t('title')}</h4>
                <p className="text-center text-gray-500 mb-6">{t('description')}</p>

                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item
                        label={t('emailLabel')}
                        name="email"
                        rules={[
                            { required: true, message: t('emailMessage') },
                            { type: 'email', message: t('emailMessage') },
                        ]}
                    >
                        <Input placeholder={t('emailPlaceholder')} />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={loading}
                            className="w-full"
                        >
                            {t('submit')}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
