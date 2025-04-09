'use client'
import React, { useState } from 'react';
import {
    Box,
    Typography,
    Container,
    Card,
    CardMedia,
    CardContent,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Stack,
    TextField
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const EventsPage = () => {
    const events = [
        {
            id: 1,
            title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM',
            date: '14 APR',
            description: 'SẢN SÁNG ĐỒNG HÀ - ĐỔI MỚI SÁNG TẠO CÙNG RENOVATE VIỆT NAM 2024',
            image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        },
        {
            id: 2,
            title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM',
            date: '14 APR',
            description: 'SẢN SÁNG ĐỒNG HÀ - ĐỔI MỚI SÁNG TẠO CÙNG RENOVATE VIỆT NAM 2024',
            image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        },
        {
            id: 3,
            title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM',
            date: '14 APR',
            description: 'SẢN SÁNG ĐỒNG HÀ - ĐỔI MỚI SÁNG TẠO CÙNG RENOVATE VIỆT NAM 2024',
            image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        },
        {
            id: 4,
            title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM',
            date: '14 APR',
            description: 'SẢN SÁNG ĐỒNG HÀ - ĐỔI MỚI SÁNG TẠO CÙNG RENOVATE VIỆT NAM 2024',
            image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        },
        {
            id: 5,
            title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM',
            date: '14 APR',
            description: 'SẢN SÁNG ĐỒNG HÀ - ĐỔI MỚI SÁNG TẠO CÙNG RENOVATE VIỆT NAM 2024',
            image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        },
        {
            id: 6,
            title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP TRUNG TÂM',
            date: '14 APR',
            description: 'SẢN SÁNG ĐỒNG HÀ - ĐỔI MỚI SÁNG TẠO CÙNG RENOVATE VIỆT NAM 2024',
            image: 'https://ohmyfacts.com/wp-content/uploads/2024/10/27-facts-about-innovation-1728450595.jpg',
        },
    ];

    const [sortBy, setSortBy] = useState('');
    const [timeFilter, setTimeFilter] = useState('');

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
                    Sự Kiện
                </Typography>
            </Box>

            {/* Filter Section */}
            <Box
                sx={{
                    bgcolor: '#1f2a5a',
                    color: 'white',
                    py: 3,
                    transform: 'translateY(-20px)',
                    borderRadius: '10px',
                    maxWidth: '90%',
                    mx: 'auto',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}
            >
                <Container>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 3
                    }}>
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="subtitle2" sx={{ mb: 1 }}>Tên sự kiện:</Typography>
                            <Box
                                component="input"
                                placeholder="Vui lòng nhập..."
                                sx={{
                                    width: '100%',
                                    bgcolor: 'transparent',
                                    color: 'white',
                                    border: 'none',
                                    borderBottom: '1px solid rgba(255,255,255,0.5)',
                                    padding: '8px 0',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    '&::placeholder': {
                                        color: 'rgba(255,255,255,0.7)',
                                    },
                                    '&:focus': {
                                        outline: 'none',
                                        borderBottom: '2px solid white',
                                    }
                                }}
                            />
                        </Box>

                        <Box sx={{ flex: 1 }}>
                            <Typography variant="subtitle2" sx={{ mb: 1 }}>Địa điểm:</Typography>
                            <Box
                                component="input"
                                placeholder="Vui lòng nhập..."
                                sx={{
                                    width: '100%',
                                    bgcolor: 'transparent',
                                    color: 'white',
                                    border: 'none',
                                    borderBottom: '1px solid rgba(255,255,255,0.5)',
                                    padding: '8px 0',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    '&::placeholder': {
                                        color: 'rgba(255,255,255,0.7)',
                                    },
                                    '&:focus': {
                                        outline: 'none',
                                        borderBottom: '2px solid white',
                                    }
                                }}
                            />
                        </Box>

                        <Box sx={{ flex: 1 }}>
                            <Typography variant="subtitle2" sx={{ mb: 1 }}>Thời gian:</Typography>
                            <FormControl fullWidth variant="standard" sx={{ borderBottom: '1px solid rgba(255,255,255,0.5)' }}>
                                <Select
                                    value={timeFilter}
                                    onChange={(e) => setTimeFilter(e.target.value)}
                                    displayEmpty
                                    sx={{
                                        color: 'white',
                                        '& .MuiSelect-icon': { color: 'white' },
                                        '&::before': { borderBottom: 'none' }
                                    }}
                                    IconComponent={KeyboardArrowDownIcon}
                                >
                                    <MenuItem value="">
                                        <Typography>Any date</Typography>
                                    </MenuItem>
                                    <MenuItem value="today">Today</MenuItem>
                                    <MenuItem value="tomorrow">Tomorrow</MenuItem>
                                    <MenuItem value="this-week">This Week</MenuItem>
                                    <MenuItem value="this-month">This Month</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Container sx={{ mt: 6, mb: 8 }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 4,
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 2
                }}>
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                        Sự kiện
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <FormControl size="small" sx={{ minWidth: 180 }}>
                            <InputLabel>Tình trạng sự kiện</InputLabel>
                            <Select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                label="Tình trạng sự kiện"
                                IconComponent={KeyboardArrowDownIcon}
                            >
                                <MenuItem value="all">Tất cả</MenuItem>
                                <MenuItem value="upcoming">Sắp diễn ra</MenuItem>
                                <MenuItem value="ongoing">Đang diễn ra</MenuItem>
                                <MenuItem value="past">Đã kết thúc</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl size="small" sx={{ minWidth: 120 }}>
                            <InputLabel>Thể loại</InputLabel>
                            <Select
                                value={timeFilter}
                                onChange={(e) => setTimeFilter(e.target.value)}
                                label="Thời hạn"
                                IconComponent={KeyboardArrowDownIcon}
                            >
                                <MenuItem value="all">Khoa học</MenuItem>
                                <MenuItem value="today">Công nghệ</MenuItem>
                                <MenuItem value="tomorrow">Nội bộ</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 3,
                    mx: -1.5
                }}>
                    {events.map((event) => (
                        <Box
                            key={event.id}
                            sx={{
                                width: {
                                    xs: 'calc(100% - 24px)',
                                    sm: 'calc(50% - 24px)',
                                    md: 'calc(33.333% - 24px)'
                                },
                                p: 1.5
                            }}
                        >
                            <Card sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: 'none',
                                border: '1px solid #eee',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                }
                            }}>
                                <Box sx={{ position: 'relative' }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={event.image || "https://via.placeholder.com/400x200"}
                                        alt={event.title}
                                    />
                                    <Box sx={{
                                        position: 'absolute',
                                        top: 10,
                                        left: 10,
                                        bgcolor: '#fff',
                                        p: 1,
                                        borderRadius: '4px',
                                        textAlign: 'center',
                                        minWidth: '50px'
                                    }}>
                                        <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>
                                            {event.date.split(' ')[0]}
                                        </Typography>
                                        <Typography variant="caption" sx={{ display: 'block', fontWeight: 'bold', fontSize: '0.7rem' }}>
                                            {event.date.split(' ')[1]}
                                        </Typography>
                                    </Box>
                                </Box>

                                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                                        {event.title}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                        {event.description}
                                    </Typography>

                                    <Stack direction="row" spacing={1} sx={{ mt: 'auto' }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="small"
                                            sx={{
                                                borderRadius: '4px',
                                                textTransform: 'none',
                                                flex: 1
                                            }}
                                        >
                                            Đăng ký
                                        </Button>

                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            size="small"
                                            sx={{
                                                borderRadius: '4px',
                                                textTransform: 'none',
                                                flex: 1
                                            }}
                                        >
                                            Chi tiết
                                        </Button>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Box>

                {/* View More Button */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                    <Button
                        variant="outlined"
                        color="primary"
                        sx={{
                            borderRadius: '20px',
                            px: 4
                        }}
                    >
                        Xem thêm
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default EventsPage;
