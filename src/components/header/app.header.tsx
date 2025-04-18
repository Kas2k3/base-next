'use client';

import { useState } from 'react';
import { DownOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Drawer, Dropdown, Space } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../button/LanguageSwitcher';

const AppHeader = () => {
    const t = useTranslations();
    const { data: session } = useSession();
    const pathname = usePathname();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const menuItems = [
        { label: t('home'), href: '/' },
        { label: t('about'), href: '/about' },
        { label: t('services'), href: '/services' },
        { label: t('news'), href: '/news' },
        { label: t('events'), href: '/events' },
        { label: t('contact'), href: '/contact' },
    ];

    const items = [
        { label: t('profile'), key: 'profile' },
        { label: t('logout'), key: 'logout' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
            <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/logo/logo.jpg"
                        alt="Vietnam Innovation Gateway Logo"
                        width={60}
                        height={60}
                        className="object-contain"
                    />
                </Link>

                <nav className="hidden md:flex space-x-6 items-center">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`hover:text-blue-600 ${pathname === item.href
                                ? 'font-semibold border-b-2 border-blue-500 pb-1'
                                : ''
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}

                    <LanguageSwitcher />

                    {session ? (
                        <Dropdown menu={{ items }} placement="bottomRight" arrow>
                            <button onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <Avatar className="cursor-pointer" icon={<UserOutlined />} />
                                    <DownOutlined />
                                </Space>
                            </button>
                        </Dropdown>
                    ) : (
                        <Link href="/auth/login">
                            <Button type="primary">{t('login')}</Button>
                        </Link>
                    )}
                </nav>

                <div className="md:hidden">
                    <Button type="text" icon={<MenuOutlined />} onClick={() => setDrawerOpen(true)} />
                </div>
            </div>

            <Drawer
                title={t('menu')}
                placement="right"
                onClose={() => setDrawerOpen(false)}
                open={drawerOpen}
            >
                <nav className="flex flex-col gap-4">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-lg ${pathname === item.href ? 'font-bold text-blue-500' : ''}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <hr />
                    {session ? (
                        <>
                            <Link href="/profile" className="text-lg">{t('profile')}</Link>
                            <button className="text-left text-lg w-full">{t('logout')}</button>
                        </>
                    ) : (
                        <Link href="/auth/login" className="text-md">{t('login')}</Link>
                    )}
                </nav>
            </Drawer>
        </header>
    );
};

export default AppHeader;
