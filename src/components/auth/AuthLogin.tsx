'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Button, Checkbox, Form, Input, Typography, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import BackButton from '../button/BackButton';

const { Title, Text } = Typography;

const AuthLogin = () => {
    const t = useTranslations('signIn');
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        const res = await signIn('credentials', {
            email: values.email,
            password: values.password,
            redirect: false,
        });

        if (!res?.error) {
            router.push('/');
        } else {
            message.error(t('error'));
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
                <BackButton />
                <div className="flex justify-center mb-6">
                    <Image src="/logo/logo.jpg" alt="Logo" width={70} height={70} />
                </div>

                <Title level={4} className="text-center mb-6">
                    {t('title')}
                </Title>

                <Form name="login" layout="vertical" onFinish={onFinish} initialValues={{ remember: true }}>
                    <Form.Item label={t('emailLabel')} name="email" rules={[{ required: true, message: t('emailMessage') }]}>
                        <Input placeholder={t('emailPlaceholder')} />
                    </Form.Item>

                    <Form.Item label={t('passwordLabel')} name="password" rules={[{ required: true, message: t('passwordMessage') }]}>
                        <Input.Password
                            placeholder={t('passwordPlaceholder')}
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </Form.Item>

                    <div className="flex items-center justify-between mb-4">
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>{t('rememberMe')}</Checkbox>
                        </Form.Item>
                        <Link href="/auth/forgot-password" className="text-blue-600 text-sm">
                            {t('forgotPassword')}
                        </Link>
                    </div>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-full" loading={loading}>
                            {t('submit')}
                        </Button>
                    </Form.Item>
                </Form>

                <div className="text-center">
                    <Text type="secondary">
                        {t('noAccount')} <Link href="/auth/register" className="text-blue-600">{t('signUp')}</Link>
                    </Text>
                </div>
            </div>
        </div>
    );
};

export default AuthLogin;