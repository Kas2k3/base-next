'use client'
import React from 'react';
import { Box, Typography, Container, Card, CardContent, Divider } from '@mui/material';
import { useRouter } from 'next/navigation';

const NewsPage = () => {
    const router = useRouter();
    const featuredNews = {
        id: 1,
        title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM ĐỔI MỚI SÁNG TẠO',
        date: '10 Tháng 4 2025',
        author: 'Nguyễn Việt Dũng',
        image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        content: [
            'Ngày 10 tháng 4 năm 2025, Trung tâm Đổi mới Sáng tạo chính thức tổ chức lễ kỷ niệm 5 năm thành lập tại Hà Nội, với sự tham gia của hơn 500 khách mời, bao gồm đại diện các bộ ngành, doanh nghiệp, trường đại học và tổ chức quốc tế.',
            'Phát biểu tại buổi lễ, Giám đốc Trung tâm – ông Nguyễn Việt Dũng – đã tổng kết chặng đường 5 năm đầy nỗ lực và thành tựu trong việc thúc đẩy hệ sinh thái đổi mới sáng tạo tại Việt Nam. Trung tâm đã hỗ trợ hơn 300 startup, tổ chức hơn 200 hội thảo và kết nối thành công nhiều dự án hợp tác trong và ngoài nước.',
            'Đặc biệt, lễ kỷ niệm lần này còn giới thiệu triển lãm “Hành trình sáng tạo”, nơi trưng bày các sản phẩm công nghệ nổi bật như AI, IoT, nông nghiệp thông minh, năng lượng tái tạo và chuyển đổi số. Đây là cơ hội để cộng đồng startup và doanh nghiệp chia sẻ tầm nhìn và kết nối cơ hội phát triển.',
            'Buổi lễ cũng là dịp để công bố kế hoạch 5 năm tiếp theo của Trung tâm, với mục tiêu trở thành một trung tâm đổi mới sáng tạo hàng đầu Đông Nam Á, đồng thời mở rộng hợp tác quốc tế trong các lĩnh vực công nghệ cao.',
            'Sự kiện kết thúc với lễ ký kết hợp tác chiến lược giữa Trung tâm và các đối tác lớn như Tập đoàn ABC, Đại học DEF và Tổ chức GHI, hứa hẹn mang lại nhiều cơ hội phát triển bền vững và sáng tạo cho Việt Nam trong thời gian tới.'
        ],
    };

    const recentNews = [
        {
            id: 2,
            title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM ĐỔI MỚI SÁNG TẠO',
            date: '10 Tháng 4 2025',
            author: 'Nguyễn Việt Dũng',
            image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        },
        {
            id: 3,
            title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM ĐỔI MỚI SÁNG TẠO',
            date: '10 Tháng 4 2025',
            author: 'Nguyễn Việt Dũng',
            image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        },
        {
            id: 4,
            title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM ĐỔI MỚI SÁNG TẠO',
            date: '10 Tháng 4 2025',
            author: 'Nguyễn Việt Dũng',
            image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        },
        {
            id: 5,
            title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM ĐỔI MỚI SÁNG TẠO',
            date: '10 Tháng 4 2025',
            author: 'Nguyễn Việt Dũng',
            image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        },
    ];

    const handleClick = (news) => {
        localStorage.setItem('selectedNews', JSON.stringify(news));
        router.push(`/news/${news.id}`);
    };

    const renderNewsList = () => (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {recentNews.map((news) => (
                <Box
                    key={news.id}
                    sx={{
                        display: 'flex',
                        gap: 2,
                        pb: 2,
                        borderBottom: '1px solid #e0e0e0',
                        '&:last-child': {
                            borderBottom: 'none'
                        }
                    }}
                >
                    <Box sx={{ width: 120, flexShrink: 0 }}>
                        <Box
                            component="img"
                            src={news.image}
                            alt={news.title}
                            sx={{
                                width: '100%',
                                height: 80,
                                objectFit: 'cover',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleClick(news)}
                        />
                    </Box>
                    <Box>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                            {news.author} • {news.date}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            component="h3"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '1rem',
                                lineHeight: 1.3,
                                cursor: 'pointer',
                                '&:hover': { color: '#1976d2' }
                            }}
                            onClick={() => handleClick(news)}
                        >
                            {news.title}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    );

    return (
        <Box>
            <Box
                sx={{
                    position: 'relative',
                    height: '200px',
                    backgroundImage: 'url(https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 4,
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 59, 92, 0.7)',
                    }
                }}
            >
                <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                        color: 'white',
                        position: 'relative',
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}
                >
                    Tin Tức
                </Typography>
            </Box>

            <Container maxWidth="lg">
                <Box sx={{ mb: 2 }}>
                    <Typography
                        variant="h6"
                        component="h2"
                        sx={{
                            color: '#d32f2f',
                            fontWeight: 'bold',
                            position: 'relative',
                            display: 'inline-block',
                        }}
                    >
                        VIỆT NAM
                    </Typography>
                    <Divider sx={{ mt: 2, mb: 4 }} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
                    <Box sx={{ flex: 1 }}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 0, boxShadow: 'none' }}>
                            <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
                                <Box
                                    component="img"
                                    src={featuredNews.image}
                                    alt={featuredNews.title}
                                    onClick={() => handleClick(featuredNews)}
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        cursor: 'pointer'
                                    }}
                                />
                            </Box>
                            <CardContent sx={{ p: 0, pt: 2 }}>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                    {featuredNews.author} • {featuredNews.date}
                                </Typography>
                                <Typography
                                    variant="h5"
                                    component="h3"
                                    onClick={() => handleClick(featuredNews)}
                                    sx={{
                                        fontWeight: 'bold',
                                        mb: 2,
                                        fontSize: { xs: '1.2rem', md: '1.5rem' },
                                        cursor: 'pointer',
                                        '&:hover': { color: '#1976d2' }
                                    }}
                                >
                                    {featuredNews.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        {renderNewsList()}
                    </Box>
                </Box>
            </Container>

            <Container maxWidth="lg" sx={{ mt: 8 }}>
                <Box sx={{ mb: 2 }}>
                    <Typography
                        variant="h6"
                        component="h2"
                        sx={{
                            color: '#d32f2f',
                            fontWeight: 'bold',
                            position: 'relative',
                            display: 'inline-block',
                        }}
                    >
                        THẾ GIỚI
                    </Typography>
                    <Divider sx={{ mt: 2, mb: 4 }} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
                    <Box sx={{ flex: 1 }}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 0, boxShadow: 'none' }}>
                            <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
                                <Box
                                    component="img"
                                    src={featuredNews.image}
                                    alt={featuredNews.title}
                                    onClick={() => handleClick(featuredNews)}
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        cursor: 'pointer'
                                    }}
                                />
                            </Box>
                            <CardContent sx={{ p: 0, pt: 2 }}>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                    {featuredNews.author} • {featuredNews.date}
                                </Typography>
                                <Typography
                                    variant="h5"
                                    component="h3"
                                    onClick={() => handleClick(featuredNews)}
                                    sx={{
                                        fontWeight: 'bold',
                                        mb: 2,
                                        fontSize: { xs: '1.2rem', md: '1.5rem' },
                                        cursor: 'pointer',
                                        '&:hover': { color: '#1976d2' }
                                    }}
                                >
                                    {featuredNews.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        {renderNewsList()}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default NewsPage;
