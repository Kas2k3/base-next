'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const LanguageSwitcher = () => {
    const [locale, setLocale] = useState<string>('vi');
    const router = useRouter();

    useEffect(() => {
        const cookie = document.cookie
            .split('; ')
            .find((row) => row.startsWith('NEXT_LOCALE='))?.split('=')[1];

        if (cookie) {
            setLocale(cookie);
        } else {
            const browserLocale = navigator.language.slice(0, 2);
            setLocale(browserLocale);
            document.cookie = `NEXT_LOCALE=${browserLocale}; path=/; max-age=31536000`;
            router.refresh();
        }
    }, [router]);

    const changeLanguage = (newLocale: string) => {
        setLocale(newLocale);
        document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
        router.refresh();
    };

    const items = [
        { label: '🇻🇳 Tiếng Việt', key: 'vi', onClick: () => changeLanguage('vi') },
        { label: '🇺🇸 English', key: 'en', onClick: () => changeLanguage('en') },
    ];

    return (
        <Dropdown menu={{ items }} trigger={['click']} placement="bottomRight">
            <Button>
                {locale.toUpperCase()} <DownOutlined />
            </Button>
        </Dropdown>
    );
};

export default LanguageSwitcher;
