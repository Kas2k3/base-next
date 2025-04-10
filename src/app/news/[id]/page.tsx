'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Box, Typography, Container } from '@mui/material';

export default function NewsDetailPage() {
    const { id } = useParams();
    const [news, setNews] = useState<any>(null);

    useEffect(() => {
        const storedNews = localStorage.getItem('selectedNews');
        if (storedNews) {
            const parsedNews = JSON.parse(storedNews);
            if (parsedNews.id.toString() === id) {
                setNews(parsedNews);
            }
        }
    }, [id]);

    if (!news) {
        return (
            <Container sx={{ py: 10 }}>
                <Typography variant="h6" align="center">
                    Không tìm thấy tin tức.
                </Typography>
            </Container>
        );
    }

    return (
        <>
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
                <Box>
                    <Typography
                        variant="h5"
                        component="h1"
                        sx={{
                            color: 'white',
                            position: 'relative',
                            fontWeight: 'bold',
                            textAlign: 'center'
                        }}
                    >
                        {news.title}
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        color="text.secondary"
                        gutterBottom
                        sx={{
                            color: 'white',
                            position: 'relative',
                            textAlign: 'center'
                        }}
                    >
                        {news.author} • {news.date}
                    </Typography>
                </Box>
            </Box>
            <Container maxWidth="md" sx={{ py: 6 }}>
                <Box>
                    <Box
                        component="img"
                        src={news.image}
                        alt={news.title}
                        sx={{
                            width: '100%',
                            height: { xs: 200, sm: 400 },
                            objectFit: 'cover',
                            borderRadius: 2,
                            my: 3,
                        }}
                    />

                    {Array.isArray(news.content) &&
                        news.content.map((paragraph: string, index: number) => (
                            <Typography key={index} variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                                {paragraph}
                            </Typography>
                        ))}
                </Box>
            </Container>
        </>

    );
}
