'use client'

import { Typography, Divider, Card, Button } from 'antd'

const newsList = [
    {
        title: 'The 20th ASEAN Ministerial Conference on Science, Technology, and Innovation.',
        description:
            'From June 3–7, Cambodia will host the 20th ASEAN Ministerial Conference on Science, Technology, and Innovation.',
        image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        date: 'June 5, 2014',
    },
    {
        title: 'Vietnam’s AI System for Breast X-ray Diagnosis Opens Doors to the U.S.',
        description:
            'VinDr by VinBigdata is the first AI product in Vietnam to meet FDA standards in the field of X-ray image analysis.',
        image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        date: 'June 5, 2014',
    },
    {
        title: '47 Projects Win the 2023 Vietnam Science and Technology Innovation Awards.',
        description:
            '47 Notable Scientific Projects Being Applied in Production, Delivering High Economic Efficiency, and Serving Daily Life.',
        image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        date: 'June 5, 2014',
    },
]

export default function ContentNews() {
    return (
        <div className="mx-[50px]">
            <Typography.Title level={5} className="text-blue-600 mb-4">
                News:
            </Typography.Title>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsList.map((item, index) => (
                    <Card
                        key={index}
                        className="rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
                    >
                        <div className="p-4">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-[180px] object-cover rounded-md mb-3"
                            />
                            <p className="text-xs text-gray-500">{item.date}</p>
                            <h3 className="font-semibold text-base mb-1">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="flex justify-center my-6">
                <Button type="primary" href="#">
                    View more
                </Button>
            </div>

            <Divider className="mb-8" />
        </div>
    )
}
