'use client';
import React, { useEffect, useState } from 'react';
import {
    Typography,
    Container,
    CardMedia,
    Button,
    Stack,
} from '@mui/material';
import { useRouter } from 'next/navigation';

const EventDetailPage = () => {
    const router = useRouter();
    const [event, setEvent] = useState<any>(null);

    useEffect(() => {
        const stored = localStorage.getItem('selectedEvent');
        if (stored) {
            setEvent(JSON.parse(stored));
        } else {
            router.push('/events');
        }
    }, [router]);

    if (!event) return null;

    return (
        <Container sx={{ py: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                {event.title}
            </Typography>

            <Typography variant="subtitle2" color="primary" sx={{ mb: 4 }}>
                {event.date}
            </Typography>

            <CardMedia
                component="img"
                height="300"
                image={event.image || "https://via.placeholder.com/400x200"}
                alt={event.title}
                sx={{ borderRadius: 2, mb: 4 }}
            />

            <Typography
                variant="body1"
                sx={{ whiteSpace: 'pre-line', mb: 4, fontSize: '1.1rem' }}
            >
                {event.description}
            </Typography>

            <Stack direction="row" spacing={2}>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ borderRadius: 2, px: 4 }}
                >
                    Đăng ký
                </Button>

                <Button
                    variant="outlined"
                    onClick={() => router.push('/events')}
                    sx={{ borderRadius: 2, px: 4 }}
                >
                    Quay lại
                </Button>
            </Stack>
        </Container>
    );
};

export default EventDetailPage;
