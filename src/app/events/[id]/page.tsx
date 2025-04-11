'use client';
import React, { useEffect, useState } from 'react';
import { Button, Typography } from 'antd';
import { useRouter } from 'next/navigation';

const { Title, Text, Paragraph } = Typography;

const EventDetailPage = () => {
    const router = useRouter();
    const [event, setEvent] = useState<any>(null);

    useEffect(() => {
        const stored = localStorage.getItem('selectedEvent');
        if (stored) {
            setEvent(JSON.parse(stored));
        } else {
            router.push('/events');
        }
    }, [router]);

    if (!event) return null;

    return (
        <div className="max-w-4xl mx-auto py-10 px-4">
            <Title level={2} className="!mb-2">{event.title}</Title>
            <Text type="secondary" className="block mb-6">{event.date}</Text>

            <div className="mb-6 overflow-hidden rounded-lg">
                <img
                    src={event.image || "https://via.placeholder.com/800x400"}
                    alt={event.title}
                    width={800}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg"
                />
            </div>

            <Paragraph className="text-base leading-relaxed whitespace-pre-line mb-6">
                {event.description}
            </Paragraph>

            <div className="flex gap-4">
                <Button type="primary" className="px-6 rounded-lg">
                    Đăng ký
                </Button>
                <Button
                    onClick={() => router.push('/events')}
                    className="px-6 rounded-lg"
                >
                    Quay lại
                </Button>
            </div>
        </div>
    );
};

export default EventDetailPage;
