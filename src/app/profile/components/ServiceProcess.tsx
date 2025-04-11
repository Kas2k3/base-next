'use client';
import { Button } from 'antd';
import { CustomerServiceOutlined } from '@ant-design/icons';

const services = [
    'Patent/Utility Solution Registration Services.',
    'Industrial Design Registration Services.',
];

export default function ServiceProcess() {
    return (
        <div className="mb-6">
            <h3 className="text-base font-semibold mb-2">Service Process</h3>
            <div className="space-y-3">
                {services.map((service, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                        <CustomerServiceOutlined className="text-blue-500 text-xl" />
                        <p>{service}</p>
                    </div>
                ))}
            </div>
            <Button type="default" className="mt-4">+ Explore more service</Button>
        </div>
    );
}
