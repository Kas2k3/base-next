'use client'

import { Typography, Button, Card, Tag } from 'antd'

const events = [
    {
        id: 1,
        title: "THE 5TH ANNIVERSARY CELEBRATION OF THE CENTER'S ESTABLISHMENT",
        description: "READY TO IGNITE – INNOVATE WITH VIETNAM 2024",
        date: '2024-04-14',
        image:
            'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
    },
    {
        id: 2,
        title: 'Workshop: Safeguarding Revenue through Intellectual...',
        description:
            'Hosted by GameGeek, with the participation of leading experts from LNN.',
        date: '2024-03-27',
        image:
            'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
    },
    {
        id: 3,
        title: "THE 5TH ANNIVERSARY CELEBRATION OF THE CENTER'S ESTABLISHMENT",
        description: "READY TO IGNITE – INNOVATE WITH VIETNAM 2024",
        date: '2024-04-14',
        image:
            'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
    },
]

function formatDate(dateString: string) {
    const date = new Date(dateString)
    const options = { month: 'short' } as const
    const month = date.toLocaleString('en-US', options).toUpperCase()
    const day = date.getDate()
    return { month, day }
}

export default function ContentEvent() {
    return (
        <div className="mx-[50px]">
            <Typography.Title level={3} className="text-blue-600 mb-4">
                Events:
            </Typography.Title>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => {
                    const { month, day } = formatDate(event.date)

                    return (
                        <Card
                            key={event.id}
                            className="rounded-2xl overflow-hidden shadow hover:shadow-md transition-all"
                            cover={
                                <img
                                    alt={event.title}
                                    src={event.image}
                                    className="h-[180px] w-full object-cover"
                                />
                            }
                            bodyStyle={{ padding: '16px' }}
                        >
                            <div className="flex mb-2">
                                <div className="text-center mr-4">
                                    <div className="text-blue-500 font-bold text-xs">{month}</div>
                                    <div className="text-lg font-bold leading-none">{day}</div>
                                </div>
                                <div>
                                    <Typography.Text strong className="block">
                                        {event.title}
                                    </Typography.Text>
                                    <Typography.Paragraph type="secondary" ellipsis={{ rows: 2 }}>
                                        {event.description}
                                    </Typography.Paragraph>
                                </div>
                            </div>

                            <div className="flex justify-around items-center mt-4">
                                <Button size="small" type="default">
                                    View more
                                </Button>
                                <Button size="small" type="primary">
                                    Registration
                                </Button>
                            </div>

                        </Card>
                    )
                })}
            </div>

            <div className="flex justify-center mt-6">
                <Button type="primary">View more</Button>
            </div>
        </div>
    )
}
