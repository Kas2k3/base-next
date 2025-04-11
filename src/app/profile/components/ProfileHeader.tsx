'use client';
import { Avatar, Button } from 'antd';

export default function ProfileHeader() {
    return (
        <div className="flex justify-between mb-6">
            <div className="flex items-center gap-4">
                <Avatar
                    src="/path-to-avatar.jpg"
                    alt="Huynh Thanh Dat"
                    size={80}
                />
                <div>
                    <h2 className="text-lg font-semibold">Huynh Thanh Dat</h2>
                    <p className="text-gray-500 text-sm">huynhthanhdat@gmail.com</p>
                </div>
            </div>

            <Button type="primary" className="w-20 h-10">
                Edit
            </Button>
        </div>
    );
}
