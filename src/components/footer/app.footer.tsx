import React from 'react';
import {
    EnvironmentOutlined,
    PhoneOutlined,
    MailOutlined,
} from '@ant-design/icons';
import Image from 'next/image';

export default function AppFooter() {
    return (
        <div className="bg-blue-500 text-white mt-auto px-6 py-8">
            <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center">
                    <Image
                        src="/logo/logo.jpg"
                        alt="Vietnam Innovation Gateway Logo"
                        width={100}
                        height={100}
                    />
                </div>

                <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                        <EnvironmentOutlined />
                        <div className="text-white">140 Tran Duy Hung, Ha Noi, Vietnam</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <PhoneOutlined />
                        <div className="text-white">(123) 456-7890</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <MailOutlined />
                        <div className="text-white">info@vig.gov.vn</div>
                    </div>
                </div>
            </div>

            <div className="text-center text-xs text-white border-t border-white/20 pt-4 mt-6">
                © 2024 State Agency of Technology and Innovation, Ministry of Science and Technology of Vietnam
            </div>
        </div>
    );
}
