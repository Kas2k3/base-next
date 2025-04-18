'use client';

import { useTranslations } from 'next-intl';
import { Button, Form, Input, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import BackButton from '../button/BackButton';

export default function AuthRegister() {
    const t = useTranslations('register');

    const onFinish = (values: any) => {
        const { password, confirmPassword } = values;

        if (password !== confirmPassword) {
            message.error(t('error'));
            return;
        }

        message.success(t('submit'));
        window.location.href = '/auth/login';
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
                <BackButton />
                <div className="flex justify-center mb-6">
                    <Image src="/logo/logo.jpg" alt="Logo" width={70} height={70} />
                </div>

                <h4 className="text-center mb-6">{t('title')}</h4>

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

                    <Form.Item
                        label={t('passwordLabel')}
                        name="password"
                        rules={[{ required: true, message: t('passwordMessage') }]}
                    >
                        <Input.Password
                            placeholder={t('passwordPlaceholder')}
                            iconRender={(visible) =>
                                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                            }
                        />
                    </Form.Item>

                    <Form.Item
                        label={t('confirmPasswordLabel')}
                        name="confirmPassword"
                        rules={[{ required: true, message: t('confirmPasswordMessage') }]}
                    >
                        <Input.Password
                            placeholder={t('confirmPasswordPlaceholder')}
                            iconRender={(visible) =>
                                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                            }
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-full">
                            {t('submit')}
                        </Button>
                    </Form.Item>
                </Form>

                <div className="text-center mt-4">
                    <p className="text-gray-500">
                        {t('noAccount')}{' '}
                        <Link href="/auth/login" className="text-blue-600">
                            {t('signIn')}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
