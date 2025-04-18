import { Button } from 'antd';
import Link from 'next/link';
import { getEventById } from './../data';
import RegisterButton from './components/RegisterButton';
import { useTranslations } from 'next-intl';

export default function EventDetailPage({ params }: Readonly<{ params: { id: string } }>) {
    const t = useTranslations('eventsPage');
    const actionsT = useTranslations('eventsPage.filters.actions');
    const event = getEventById(params.id);

    if (!event) {
        return (
            <div className="max-w-4xl mx-auto py-10 px-4 text-center">
                <h2 className="text-2xl font-bold mb-4">{actionsT('notFound')}</h2>
                <Link href="/events">
                    <Button>{actionsT('backToList')}</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="pb-10 w-full pt-20">
            <div className="z-0 relative h-56 bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url('https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg')` }}>
                <div className="absolute inset-0 bg-[#003b5c]/70" />
                <h1 className="relative text-white text-3xl font-bold z-10">{t('detailTitle')}</h1>
            </div>

            <div className="max-w-4xl mx-auto py-10 px-4">
                <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
                <p className="text-gray-500 mb-6">{event.date}</p>

                <div className="mb-6 overflow-hidden rounded-lg">
                    <img
                        src={event.image || "https://via.placeholder.com/800x400"}
                        alt={event.title}
                        width={800}
                        height={400}
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>

                <div className="text-base leading-relaxed whitespace-pre-line mb-6">
                    {event.description}
                </div>

                <div className="flex gap-4">
                    <RegisterButton />

                    <Link href="/events">
                        <Button className="px-6 rounded-lg">
                            {actionsT('backToList')}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
