'use client';
import { useState } from 'react';
import { Input, Select } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useTranslations } from 'next-intl';

const { Option } = Select;

export default function EventFilters() {
    const t = useTranslations('eventsPage.filters');
    const [timeFilter, setTimeFilter] = useState('');

    return (
        <div className="bg-[#1f2a5a] relative text-white -mt-5 p-6 max-w-6xl mx-auto rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label className="block text-sm font-semibold mb-1">{t('name')}</label>
                    <Input placeholder={t('enterPlaceholder')} className="bg-transparent text-white border-b border-white/50" />
                </div>
                <div>
                    <label className="block text-sm font-semibold mb-1">{t('location')}</label>
                    <Input placeholder={t('enterPlaceholder')} className="bg-transparent text-white border-b border-white/50" />
                </div>
                <div>
                    <label className="block text-sm font-semibold mb-1">{t('time')}</label>
                    <Select
                        value={timeFilter}
                        onChange={setTimeFilter}
                        suffixIcon={<DownOutlined className="text-white" />}
                        className="w-full text-white"
                        dropdownStyle={{ color: 'black' }}
                        style={{ backgroundColor: 'transparent' }}
                    >
                        <Option value="">{t('anyDate')}</Option>
                        <Option value="today">{t('today')}</Option>
                        <Option value="tomorrow">{t('tomorrow')}</Option>
                        <Option value="this-week">{t('thisWeek')}</Option>
                        <Option value="this-month">{t('thisMonth')}</Option>
                    </Select>
                </div>
            </div>
        </div>
    );
}
