import React from 'react';
import { Card } from 'antd';
import Link from 'next/link';
import { featuredNews, recentNews } from './data';
import { getTranslations } from 'next-intl/server';

const NewsPage = async () => {
    const t = await getTranslations('newsPage');
    const renderNewsList = () => (
        <div className="flex flex-col gap-4">
            {recentNews.map((news) => (
                <div
                    key={news.id}
                    className="flex gap-4 border-b border-gray-200 pb-4 last:border-b-0"
                >
                    <div className="w-[120px] flex-shrink-0 cursor-pointer">
                        <img
                            src={news.image}
                            alt={news.title}
                            className="w-full h-20 object-cover rounded"
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-1">
                            {news.author} • {news.date}
                        </p>
                        <Link href={`/news/${news.id}`}>
                            <h3 className="font-semibold text-base leading-tight cursor-pointer text-black hover:text-blue-600">
                                {news.title}
                            </h3>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="pb-10 w-full pt-20">
            <div
                className="relative h-[200px] bg-cover bg-center flex items-center justify-center mb-8"
                style={{ backgroundImage: `url(${featuredNews.image})` }}
            >
                <div className="absolute inset-0 bg-[#003b5c]/70" />
                <h1 className="relative text-white text-3xl font-bold z-10">
                    {t('title')}
                </h1>
            </div>

            <div className="max-w-6xl mx-auto px-4">
                <div className="mb-4">
                    <h2 className="text-lg font-bold text-red-600 inline-block relative">
                        {t('sectionTitleVN')}
                    </h2>
                    <div className="border-b-2 border-gray-200 mt-2 mb-4" />
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                        <Card
                            variant="borderless"
                            className="shadow-none p-0"
                            cover={
                                <img
                                    alt={featuredNews.title}
                                    src={featuredNews.image}
                                    className="w-full h-auto aspect-video object-cover cursor-pointer"
                                />
                            }
                        >
                            <div className="text-sm text-gray-500 mb-2">
                                {featuredNews.author} • {featuredNews.date}
                            </div>
                            <Link href={`/news/${featuredNews.id}`}>
                                <h3 className="text-xl font-bold cursor-pointer text-black hover:text-blue-600">
                                    {featuredNews.title}
                                </h3>
                            </Link>
                        </Card>
                    </div>
                    <div className="flex-1">{renderNewsList()}</div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 mt-12">
                <div className="mb-4">
                    <h2 className="text-lg font-bold text-red-600 inline-block relative">
                        {t('sectionTitleGLB')}
                    </h2>
                    <div className="border-b-2 border-gray-200 mt-2 mb-4" />
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                        <Card
                            variant="borderless"
                            className="shadow-none p-0"
                            cover={
                                <img
                                    alt={featuredNews.title}
                                    src={featuredNews.image}
                                    className="w-full h-auto aspect-video object-cover cursor-pointer"
                                />
                            }
                        >
                            <div className="text-sm text-gray-500 mb-2">
                                {featuredNews.author} • {featuredNews.date}
                            </div>
                            <Link href={`/news/${featuredNews.id}`}>
                                <h3 className="text-xl font-bold cursor-pointer text-black hover:text-blue-600">
                                    {featuredNews.title}
                                </h3>
                            </Link>
                        </Card>
                    </div>
                    <div className="flex-1">{renderNewsList()}</div>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
