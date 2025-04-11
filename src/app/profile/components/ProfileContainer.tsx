'use client';
import { Card } from 'antd';

export default function ProfileContainer({ children }: { children: React.ReactNode }) {
    return (
        <Card
            className="rounded-2xl overflow-hidden p-4 md:p-6 shadow-md"
            variant='borderless'
        >
            {children}
        </Card>
    );
}
