'use client';
import { CalendarOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';

const events = [
    { name: 'THE 5TH ANNIVERSARY CELEBRATION OF THE CENTER’S ESTABLISHMENT', date: '14th April' },
    { name: 'Workshop: Safeguarding Revenue through Intellectual...', date: '27th March' },
];

export default function EventOfInterest() {
    return (
        <div className="mb-6">
            <Typography.Title level={5} className="!mb-4">
                Event of Interest
            </Typography.Title>

            <div className="space-y-4">
                {events.map((event, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                        <CalendarOutlined className="text-blue-500 text-xl mt-1" />
                        <div>
                            <Typography.Text strong>{event.name}</Typography.Text>
                            <br />
                            <Typography.Text type="secondary" className="text-sm">
                                {event.date}
                            </Typography.Text>
                        </div>
                    </div>
                ))}
            </div>

            <Button type="default" className="mt-4">
                + Explore more events
            </Button>
        </div>
    );
}
