'use client';

import { useRouter } from 'next/navigation';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const BackButton = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back();
        router.refresh();
    };

    return (
        <Button
            type="link"
            icon={<ArrowLeftOutlined style={{ fontSize: '30px' }} />}
            onClick={handleBack}
            className="absolute top-4 left-4 text-blue-600 hover:text-blue-800 transition-colors duration-200"
        />
    );
};

export default BackButton;
