export const events = [
    {
        id: '1',
        date: '10 APR',
        title: 'Trại hè "Sáng tạo và Hội nhập"',
        description: `Trại hè "Sáng tạo và Hội nhập" là sự kiện thường niên dành cho sinh viên yêu thích công nghệ, đổi mới sáng tạo và khởi nghiệp. 
Tham gia trại hè, bạn sẽ được:

• Giao lưu với các chuyên gia trong lĩnh vực công nghệ và khởi nghiệp  
• Tham gia workshop thực hành lập trình, thiết kế sản phẩm  
• Kết nối với các đội nhóm dự án sinh viên từ các trường đại học  
• Cơ hội nhận học bổng và giải thưởng hấp dẫn`,
        image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
    },
    {
        id: '2',
        title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM',
        date: '10 APR',
        description: 'INNOVATION SUPPORT CENTER - ĐỔI MỚI SÁNG TẠO CÙNG RENOVATE VIỆT NAM 2025',
        image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
    },
    {
        id: '3',
        title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM',
        date: '10 APR',
        description: 'INNOVATION SUPPORT CENTER - ĐỔI MỚI SÁNG TẠO CÙNG RENOVATE VIỆT NAM 2025',
        image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
    },
    {
        id: '4',
        title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM',
        date: '10 APR',
        description: 'INNOVATION SUPPORT CENTER - ĐỔI MỚI SÁNG TẠO CÙNG RENOVATE VIỆT NAM 2025',
        image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
    },
    {
        id: '5',
        title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM',
        date: '10 APR',
        description: 'INNOVATION SUPPORT CENTER - ĐỔI MỚI SÁNG TẠO CÙNG RENOVATE VIỆT NAM 2025',
        image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
    },
    {
        id: '6',
        title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM',
        date: '10 APR',
        description: 'INNOVATION SUPPORT CENTER - ĐỔI MỚI SÁNG TẠO CÙNG RENOVATE VIỆT NAM 2025',
        image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
    },
];

export function getEventById(id: string) {
    return events.find(event => event.id === id);
}
