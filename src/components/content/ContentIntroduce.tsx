import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ContentIntroduce() {
    return (
        <Card sx={{ minWidth: 275, boxShadow: 0, border: 'none' }}>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 2,
                p: 2
            }}>
                <Box sx={{ flex: 1 }}>
                    <CardContent>
                        <Typography variant="h6" component="div" color="primary" gutterBottom>
                            General Introduction:
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.primary' }}>
                            Innovation is understood as the process of transforming knowledge and technology into tangible products. Innovation does not necessarily originate from research and development activities but can also stem from experiences and knowledge generated in practical production and daily life. However, it cannot be separated from science and technology (S&T). Innovation serves as an extension and a subsequent step of S&T activities to penetrate the market. The primary agents driving innovation are businesses and entrepreneurs.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="text" color="primary">View more</Button>
                    </CardActions>
                </Box>
                <Box sx={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Box
                        component="img"
                        sx={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain'
                        }}
                        alt="Innovation word cloud"
                        src="https://www.dynamicsystemsinc.com/wp-content/uploads/2020/08/Cloud-Computing-Technology.jpg"
                    />
                </Box>
            </Box>
        </Card>
    );
}