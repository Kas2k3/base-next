
import NewsDetailClient from '../components/NewsDetailClient';
import { featuredNews, recentNews } from '../data';

interface NewsDetailPageProps {
    params: {
        id: string;
    };
}

export default function NewsDetailPage({ params }: Readonly<NewsDetailPageProps>) {
    const allNews = [featuredNews, ...recentNews];

    const newsItem = allNews.find((item) => item.id === params.id);

    if (!newsItem) {
        return (
            <div className="py-10 text-center text-lg font-medium">
                Không tìm thấy tin tức.
            </div>
        );
    }

    return (
        <div className="pb-10 w-full pt-20">
            <NewsDetailClient news={newsItem} />;
        </div>
    )
}
