'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, Button, Input, Select, Typography } from 'antd'
import { DownOutlined } from '@ant-design/icons'

const { Title, Text } = Typography
const { Option } = Select

const EventsPage = () => {
    const router = useRouter()

    const events = [
        {
            id: '1',
            date: '10 APR',
            title: 'Trại hè “Sáng tạo và Hội nhập”',
            description: `Trại hè “Sáng tạo và Hội nhập” là sự kiện thường niên dành cho sinh viên yêu thích công nghệ, đổi mới sáng tạo và khởi nghiệp. 
    Tham gia trại hè, bạn sẽ được:
    
    • Giao lưu với các chuyên gia trong lĩnh vực công nghệ và khởi nghiệp  
    • Tham gia workshop thực hành lập trình, thiết kế sản phẩm  
    • Kết nối với các đội nhóm dự án sinh viên từ các trường đại học  
    • Cơ hội nhận học bổng và giải thưởng hấp dẫn`,
            image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        },
        {
            id: 2,
            title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM',
            date: '10 APR',
            description: 'INNOVATION SUPPORT CENTER - ĐỔI MỚI SÁNG TẠO CÙNG RENOVATE VIỆT NAM 2025',
            image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        },
        {
            id: 3,
            title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM',
            date: '10 APR',
            description: 'INNOVATION SUPPORT CENTER - ĐỔI MỚI SÁNG TẠO CÙNG RENOVATE VIỆT NAM 2025',
            image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        },
        {
            id: 4,
            title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM',
            date: '10 APR',
            description: 'INNOVATION SUPPORT CENTER - ĐỔI MỚI SÁNG TẠO CÙNG RENOVATE VIỆT NAM 2025',
            image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        },
        {
            id: 5,
            title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM',
            date: '10 APR',
            description: 'INNOVATION SUPPORT CENTER - ĐỔI MỚI SÁNG TẠO CÙNG RENOVATE VIỆT NAM 2025',
            image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        },
        {
            id: 6,
            title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM',
            date: '10 APR',
            description: 'INNOVATION SUPPORT CENTER - ĐỔI MỚI SÁNG TẠO CÙNG RENOVATE VIỆT NAM 2025',
            image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        },
    ];

    const [sortBy, setSortBy] = useState('')
    const [timeFilter, setTimeFilter] = useState('')

    return (
        <div>
            <div className="z-0 relative h-56 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url('https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg')` }}>
                <div className="absolute inset-0 bg-[#003b5c]/70" />
                <h1 className="relative text-white text-3xl font-bold z-10">Sự Kiện</h1>
            </div>

            <div className="bg-[#1f2a5a] relative text-white -mt-5 p-6 max-w-6xl mx-auto rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-semibold mb-1">Tên sự kiện</label>
                        <Input placeholder="Vui lòng nhập..." className="bg-transparent text-white border-b border-white/50" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-1">Địa điểm</label>
                        <Input placeholder="Vui lòng nhập..." className="bg-transparent text-white border-b border-white/50" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-1">Thời gian</label>
                        <Select
                            value={timeFilter}
                            onChange={setTimeFilter}
                            suffixIcon={<DownOutlined className="text-white" />}
                            className="w-full text-white"
                            dropdownStyle={{ color: 'black' }}
                            style={{ backgroundColor: 'transparent' }}
                        >
                            <Option value="">Any date</Option>
                            <Option value="today">Today</Option>
                            <Option value="tomorrow">Tomorrow</Option>
                            <Option value="this-week">This Week</Option>
                            <Option value="this-month">This Month</Option>
                        </Select>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 mt-10 flex flex-col sm:flex-row justify-between gap-4">
                <Title level={4} className="!mb-0">Sự kiện</Title>
                <div className="flex gap-4">
                    <Select
                        value={sortBy}
                        onChange={setSortBy}
                        placeholder="Tình trạng"
                        size="middle"
                        className="w-44"
                    >
                        <Option value="all">Tất cả</Option>
                        <Option value="upcoming">Sắp diễn ra</Option>
                        <Option value="ongoing">Đang diễn ra</Option>
                        <Option value="past">Đã kết thúc</Option>
                    </Select>
                    <Select
                        value={timeFilter}
                        onChange={setTimeFilter}
                        placeholder="Thể loại"
                        size="middle"
                        className="w-32"
                    >
                        <Option value="science">Khoa học</Option>
                        <Option value="tech">Công nghệ</Option>
                        <Option value="internal">Nội bộ</Option>
                    </Select>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {events.map((event) => (
                    <Card
                        key={event.id}
                        cover={<img alt={event.title} src={event.image} className="h-48 object-cover" />}
                        className="hover:shadow-lg transition"
                    >
                        <div className="text-sm text-blue-500 font-bold mb-1">
                            {event.date}
                        </div>
                        <Title level={5}>{event.title}</Title>
                        <Text type="secondary" className="line-clamp-2">{event.description}</Text>
                        <div className="flex gap-2 mt-4">
                            <Button type="primary" className="flex-1">Đăng ký</Button>
                            <Button
                                className="flex-1"
                                onClick={() => {
                                    localStorage.setItem('selectedEvent', JSON.stringify(event))
                                    router.push(`/events/${event.id}`)
                                }}
                            >
                                Chi tiết
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="text-center mt-10">
                <Button type="default" shape="round" size="large">
                    Xem thêm
                </Button>
            </div>
        </div>
    )
}

export default EventsPage
