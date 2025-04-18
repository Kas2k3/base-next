import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function ContentIntroduce() {
    const t = useTranslations();

    return (
        <div className="w-full rounded-lg bg-white shadow-none border border-transparent p-4 md:flex md:gap-6">
            <div className="md:w-1/2">
                <h2 className="text-xl font-semibold text-blue-600 mb-4">
                    {t('contentIntroduce.title')}
                </h2>
                <p className="text-gray-800 text-sm leading-relaxed">
                    {t('contentIntroduce.description')}
                </p>
                <div className="mt-4">
                    <Link href="/about">
                        <span className="text-blue-600 hover:underline text-sm font-medium cursor-pointer">
                            {t('contentIntroduce.viewMore')}
                        </span>
                    </Link>
                </div>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0 flex items-center justify-center">
                <img
                    className="w-full h-auto object-contain rounded-md"
                    alt="Innovation word cloud"
                    src="https://www.dynamicsystemsinc.com/wp-content/uploads/2020/08/Cloud-Computing-Technology.jpg"
                />
            </div>
        </div>
    );
}
