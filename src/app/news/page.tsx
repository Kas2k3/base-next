'use client';
import React from 'react';
import { Card } from 'antd';
import { useRouter } from 'next/navigation';

const NewsPage = () => {
    const router = useRouter();

    const featuredNews = {
        id: 1,
        title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM ĐỔI MỚI SÁNG TẠO',
        date: '10 Tháng 4 2025',
        author: 'Nguyễn Việt Dũng',
        image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        content: [
            'Ngày 10 tháng 4 năm 2025, Trung tâm Đổi mới Sáng tạo chính thức tổ chức lễ kỷ niệm 5 năm thành lập tại Hà Nội, với sự tham gia của hơn 500 khách mời, bao gồm đại diện các bộ ngành, doanh nghiệp, trường đại học và tổ chức quốc tế.',
            'Phát biểu tại buổi lễ, Giám đốc Trung tâm – ông Nguyễn Việt Dũng – đã tổng kết chặng đường 5 năm đầy nỗ lực và thành tựu trong việc thúc đẩy hệ sinh thái đổi mới sáng tạo tại Việt Nam. Trung tâm đã hỗ trợ hơn 300 startup, tổ chức hơn 200 hội thảo và kết nối thành công nhiều dự án hợp tác trong và ngoài nước.',
            'Đặc biệt, lễ kỷ niệm lần này còn giới thiệu triển lãm “Hành trình sáng tạo”, nơi trưng bày các sản phẩm công nghệ nổi bật như AI, IoT, nông nghiệp thông minh, năng lượng tái tạo và chuyển đổi số. Đây là cơ hội để cộng đồng startup và doanh nghiệp chia sẻ tầm nhìn và kết nối cơ hội phát triển.',
            'Buổi lễ cũng là dịp để công bố kế hoạch 5 năm tiếp theo của Trung tâm, với mục tiêu trở thành một trung tâm đổi mới sáng tạo hàng đầu Đông Nam Á, đồng thời mở rộng hợp tác quốc tế trong các lĩnh vực công nghệ cao.',
            'Sự kiện kết thúc với lễ ký kết hợp tác chiến lược giữa Trung tâm và các đối tác lớn như Tập đoàn ABC, Đại học DEF và Tổ chức GHI, hứa hẹn mang lại nhiều cơ hội phát triển bền vững và sáng tạo cho Việt Nam trong thời gian tới.'
        ],
    };

    const recentNews = [
        {
            id: 2,
            title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM ĐỔI MỚI SÁNG TẠO',
            date: '10 Tháng 4 2025',
            author: 'Nguyễn Việt Dũng',
            image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        },
        {
            id: 3,
            title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM ĐỔI MỚI SÁNG TẠO',
            date: '10 Tháng 4 2025',
            author: 'Nguyễn Việt Dũng',
            image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        },
        {
            id: 4,
            title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM ĐỔI MỚI SÁNG TẠO',
            date: '10 Tháng 4 2025',
            author: 'Nguyễn Việt Dũng',
            image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        },
        {
            id: 5,
            title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM ĐỔI MỚI SÁNG TẠO',
            date: '10 Tháng 4 2025',
            author: 'Nguyễn Việt Dũng',
            image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        },
    ];

    const handleClick = (news: any) => {
        localStorage.setItem('selectedNews', JSON.stringify(news));
        router.push(`/news/${news.id}`);
    };

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
                            onClick={() => handleClick(news)}
                        />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 mb-1">
                            {news.author} • {news.date}
                        </p>
                        <h3
                            onClick={() => handleClick(news)}
                            className="font-semibold text-base leading-tight cursor-pointer hover:text-blue-600"
                        >
                            {news.title}
                        </h3>
                    </div>
                </div>
            ))}
        </div>
    );

    const sectionTitle = (title: string) => (
        <div className="mb-4">
            <h2 className="text-lg font-bold text-red-600 inline-block relative">{title}</h2>
            <div className="border-b-2 border-gray-200 mt-2 mb-4" />
        </div>
    );

    return (
        <div className="pb-10">
            <div className="relative h-[200px] bg-cover bg-center flex items-center justify-center mb-8" style={{ backgroundImage: `url(${featuredNews.image})` }}>
                <div className="absolute inset-0 bg-[#003b5c]/70" />
                <h1 className="relative text-white text-3xl font-bold z-10">Tin Tức</h1>
            </div>

            <div className="max-w-6xl mx-auto px-4">
                {sectionTitle('VIỆT NAM')}

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                        <Card
                            variant="borderless">
                            className="shadow-none p-0"
                            cover={
                                <img
                                    alt={featuredNews.title}
                                    src={featuredNews.image}
                                    className="w-full h-auto aspect-video object-cover cursor-pointer"
                                    onClick={() => handleClick(featuredNews)}
                                />
                            }
                        >
                            <div className="text-sm text-gray-500 mb-2">
                                {featuredNews.author} • {featuredNews.date}
                            </div>
                            <h3
                                onClick={() => handleClick(featuredNews)}
                                className="text-xl font-bold cursor-pointer hover:text-blue-600"
                            >
                                {featuredNews.title}
                            </h3>
                        </Card>
                    </div>

                    <div className="flex-1">
                        {renderNewsList()}
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 mt-12">
                {sectionTitle('THẾ GIỚI')}
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                        <Card
                            variant="borderless">
                            className="shadow-none p-0"
                            cover={
                                <img
                                    alt={featuredNews.title}
                                    src={featuredNews.image}
                                    className="w-full h-auto aspect-video object-cover cursor-pointer"
                                    onClick={() => handleClick(featuredNews)}
                                />
                            }
                        >
                            <div className="text-sm text-gray-500 mb-2">
                                {featuredNews.author} • {featuredNews.date}
                            </div>
                            <h3
                                onClick={() => handleClick(featuredNews)}
                                className="text-xl font-bold cursor-pointer hover:text-blue-600"
                            >
                                {featuredNews.title}
                            </h3>
                        </Card>
                    </div>
                    <div className="flex-1">
                        {renderNewsList()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
