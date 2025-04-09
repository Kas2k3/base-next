import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

export default function ContentService() {
    return (
        <Card sx={{ minWidth: 275, boxShadow: 0, border: 'none' }}>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 2,
                p: 2
            }}>
                <Box
                    component="img"
                    sx={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain'
                    }}
                    alt="Innovation Service"
                    src="https://innovationcloud.com/pub/blog/15988610704603_innovation_cloud_-_services.png"
                />
            </Box>
        </Card>
    );
}