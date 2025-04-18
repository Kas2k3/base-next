'use client';

interface NewsItem {
    id: string;
    title: string;
    author: string;
    date: string;
    image: string;
    content: string[];
}

export default function NewsDetailClient({ news }: { news: NewsItem }) {
    return (
        <div>
            <div
                className="relative h-[200px] bg-cover bg-center flex items-center justify-center mb-8"
                style={{ backgroundImage: `url(${news.image})` }}
            >
                <div className="absolute inset-0 bg-[#003b5c]/70" />
                <div className="relative z-10 text-white text-center">
                    <h1 className="text-2xl font-bold">{news.title}</h1>
                    <p className="text-sm mt-1">
                        {news.author} • {news.date}
                    </p>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 py-8">
                <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-[300px] object-cover rounded-2xl mb-6"
                />

                {Array.isArray(news.content) && news.content.length > 0 ? (
                    news.content.map((paragraph, index) => (
                        <p key={index} className="mb-4 leading-8 text-base text-gray-700">
                            {paragraph}
                        </p>
                    ))
                ) : (
                    <p className="text-gray-500 italic">Không có nội dung chi tiết.</p>
                )}
            </div>
        </div>
    );
}
