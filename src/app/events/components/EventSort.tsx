'use client';
import { useState } from 'react';
import { Select } from 'antd';
import { useTranslations } from 'next-intl';

const { Option } = Select;

export default function EventSort() {
    const t = useTranslations('eventsPage.filters.sort');
    const [sortBy, setSortBy] = useState<string>('all');
    const [category, setCategory] = useState<string>('all');

    return (
        <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
                <span className="text-sm font-medium whitespace-nowrap">{t('status')}:</span>
                <Select
                    value={sortBy}
                    onChange={setSortBy}
                    size="middle"
                    className="w-44"
                >
                    <Option value="all">{t('all')}</Option>
                    <Option value="upcoming">{t('upcoming')}</Option>
                    <Option value="ongoing">{t('ongoing')}</Option>
                    <Option value="past">{t('ended')}</Option>
                </Select>
            </div>

            <div className="flex items-center gap-2">
                <span className="text-sm font-medium whitespace-nowrap">{t('category')}:</span>
                <Select
                    value={category}
                    onChange={setCategory}
                    size="middle"
                    className="w-36"
                >
                    <Option value="all">{t('all')}</Option>
                    <Option value="science">{t('science')}</Option>
                    <Option value="tech">{t('tech')}</Option>
                    <Option value="internal">{t('internal')}</Option>
                </Select>
            </div>
        </div>
    );
}
