'use client';
import { Button } from 'antd';
import { useTranslations } from 'next-intl';

export default function RegisterButton() {
    const t = useTranslations('eventsPage.filters.card');

    const handleRegister = () => {
        console.log('Đăng ký sự kiện');
    };

    return (
        <Button
            type="primary"
            className="px-6 rounded-lg"
            onClick={handleRegister}
        >
            {t('register')}
        </Button>
    );
}
