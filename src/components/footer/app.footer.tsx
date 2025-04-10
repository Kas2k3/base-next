import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Image from 'next/image';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#0085FF',
                color: 'white',
                py: 2,
                mt: 'auto',
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 2, md: 0 } }}>
                        <Image
                            src="/logo/logo.jpg"
                            alt="Vietnam Innovation Gateway Logo"
                            width={100}
                            height={100}
                        />
                    </Box>
                    <Stack spacing={1}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <LocationOnIcon sx={{ mr: 1 }} />
                            <Typography variant="body2">140 Tran Duy Hung, Ha Noi, Vietnam</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <PhoneIcon sx={{ mr: 1 }} />
                            <Typography variant="body2">(123) 456-7890</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <EmailIcon sx={{ mr: 1 }} />
                            <Typography variant="body2">(123) 456-7890</Typography>
                        </Box>
                    </Stack>
                </Box>
                <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 2, pt: 2, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                    Copyright 2024 © State Agency of Technology and Innovation, Ministry of Science and Technology of Vietnam
                </Typography>
            </Container >
        </Box >
    );
};

export default Footer;