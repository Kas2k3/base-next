'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContentIntroduce() {
    return (
        <div className="w-full rounded-lg bg-white shadow-none border border-transparent p-4 md:flex md:gap-6">
            <div className="md:w-1/2">
                <h2 className="text-xl font-semibold text-blue-600 mb-4">
                    General Introduction:
                </h2>
                <p className="text-gray-800 text-sm leading-relaxed">
                    Innovation is understood as the process of transforming knowledge and technology into tangible products.
                    Innovation does not necessarily originate from research and development activities but can also stem from
                    experiences and knowledge generated in practical production and daily life. However, it cannot be separated
                    from science and technology (S&T). Innovation serves as an extension and a subsequent step of S&T activities
                    to penetrate the market. The primary agents driving innovation are businesses and entrepreneurs.
                </p>
                <div className="mt-4">
                    <Link href="/about">
                        <span className="text-blue-600 hover:underline text-sm font-medium cursor-pointer">
                            View more
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
