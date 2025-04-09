'use client'
import React from 'react';
import { Box, Typography, Container, Card, CardContent, Divider } from '@mui/material';
import Link from 'next/link';

const NewsPage = () => {
    const featuredNews = {
        id: 1,
        title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM ĐỔI MỚI SÁNG TẠO',
        date: '27 Tháng 7 2023',
        author: 'Nguyễn Việt Dũng',
        image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        category: 'Đổi mới',
    };

    const recentNews = [
        {
            id: 2,
            title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM ĐỔI MỚI SÁNG TẠO',
            date: '27 Tháng 7 2023',
            author: 'Nguyễn Việt Dũng',
            image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        },
        {
            id: 3,
            title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM ĐỔI MỚI SÁNG TẠO',
            date: '27 Tháng 7 2023',
            author: 'Nguyễn Việt Dũng',
            image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        },
        {
            id: 4,
            title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM ĐỔI MỚI SÁNG TẠO',
            date: '27 Tháng 7 2023',
            author: 'Nguyễn Việt Dũng',
            image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        },
        {
            id: 5,
            title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM ĐỔI MỚI SÁNG TẠO',
            date: '27 Tháng 7 2023',
            author: 'Nguyễn Việt Dũng',
            image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        },
    ];

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
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 4
                    }}
                >
                    <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 50%' } }}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                borderRadius: 0,
                                boxShadow: 'none',
                            }}
                        >
                            <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
                                <Box
                                    component="img"
                                    src={featuredNews.image || "https://via.placeholder.com/600x400"}
                                    alt={featuredNews.title}
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                                {/* <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 16,
                                        left: 16,
                                        bgcolor: 'primary.main',
                                        color: 'white',
                                        px: 1.5,
                                        py: 0.5,
                                    }}
                                >
                                    <Typography variant="body2" fontWeight="bold">
                                        {featuredNews.category}
                                    </Typography>
                                </Box> */}
                            </Box>
                            <CardContent sx={{ p: 0, pt: 2, flex: 1 }}>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                    {featuredNews.author} • {featuredNews.date}
                                </Typography>
                                <Typography
                                    variant="h5"
                                    component="h3"
                                    sx={{
                                        fontWeight: 'bold',
                                        mb: 2,
                                        fontSize: { xs: '1.2rem', md: '1.5rem' }
                                    }}
                                >
                                    <Link href={`/news/${featuredNews.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        {featuredNews.title}
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>

                    {/* Recent News - Right Side */}
                    <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 50%' } }}>
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
                                            src={news.image || "https://via.placeholder.com/120x80"}
                                            alt={news.title}
                                            sx={{
                                                width: '100%',
                                                height: 80,
                                                objectFit: 'cover'
                                            }}
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
                                                lineHeight: 1.3
                                            }}
                                        >
                                            <Link href={`/news/${news.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                {news.title}
                                            </Link>
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Container>

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
                        THẾ GIỚI
                    </Typography>
                    <Divider sx={{ mt: 2, mb: 4 }} />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 4
                    }}
                >
                    <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 50%' } }}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                borderRadius: 0,
                                boxShadow: 'none',
                            }}
                        >
                            <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
                                <Box
                                    component="img"
                                    src={featuredNews.image || "https://via.placeholder.com/600x400"}
                                    alt={featuredNews.title}
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                                {/* <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 16,
                                        left: 16,
                                        bgcolor: 'primary.main',
                                        color: 'white',
                                        px: 1.5,
                                        py: 0.5,
                                    }}
                                >
                                    <Typography variant="body2" fontWeight="bold">
                                        {featuredNews.category}
                                    </Typography>
                                </Box> */}
                            </Box>
                            <CardContent sx={{ p: 0, pt: 2, flex: 1 }}>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                    {featuredNews.author} • {featuredNews.date}
                                </Typography>
                                <Typography
                                    variant="h5"
                                    component="h3"
                                    sx={{
                                        fontWeight: 'bold',
                                        mb: 2,
                                        fontSize: { xs: '1.2rem', md: '1.5rem' }
                                    }}
                                >
                                    <Link href={`/news/${featuredNews.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        {featuredNews.title}
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>

                    <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 50%' } }}>
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
                                            src={news.image || "https://via.placeholder.com/120x80"}
                                            alt={news.title}
                                            sx={{
                                                width: '100%',
                                                height: 80,
                                                objectFit: 'cover'
                                            }}
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
                                                lineHeight: 1.3
                                            }}
                                        >
                                            <Link href={`/news/${news.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                {news.title}
                                            </Link>
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default NewsPage;
