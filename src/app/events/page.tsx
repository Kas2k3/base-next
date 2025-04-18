import Link from 'next/link'
import { Card, Button } from 'antd'
import EventFilters from './components/EventFilters'
import EventSort from './components/EventSort'
import { events } from './data'
import { useTranslations } from 'next-intl'

export default function EventsPage() {
    const t = useTranslations('eventsPage');
    const cardT = useTranslations('eventsPage.filters.card');
    const actionsT = useTranslations('eventsPage.filters.actions');

    return (
        <div className="pb-10 w-full pt-20">
            <div className="z-0 relative h-56 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url('https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg')` }}>
                <div className="absolute inset-0 bg-[#003b5c]/70" />
                <h1 className="relative text-white text-3xl font-bold z-10">{t('title')}</h1>
            </div>

            <EventFilters />

            <div className="max-w-6xl mx-auto px-4 mt-10 flex flex-col sm:flex-row justify-between gap-4">
                <h2 className="text-xl font-bold m-0">{t('title')}</h2>
                <EventSort />
            </div>

            <div className="max-w-6xl mx-auto px-4 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {events.map((event) => (
                    <Card
                        key={event.id}
                        cover={<img alt={event.title} src={event.image} className="h-48 object-cover" />}
                        className="hover:shadow-lg transition h-full flex flex-col"
                    >
                        <div className="flex-1">
                            <div className="text-sm text-blue-500 font-bold mb-1">
                                {event.date}
                            </div>
                            <h3 className="text-lg font-medium mb-2">{event.title}</h3>
                            <p className="text-gray-500 line-clamp-2 mb-4">{event.description}</p>
                        </div>

                        <div className="flex gap-2 mt-auto pt-4">
                            <Button type="primary" className="flex-1">{cardT('register')}</Button>
                            <Link href={`/events/${event.id}`} className="flex-1">
                                <Button className="w-full">{cardT('details')}</Button>
                            </Link>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="text-center mt-10">
                <Button type="default" shape="round" size="large">
                    {actionsT('loadMore')}
                </Button>
            </div>
        </div>
    )
}
