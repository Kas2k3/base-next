'use client'
import * as React from 'react';
import {
    AppBar, Box, Toolbar, IconButton,
    MenuItem, Menu, Container, Avatar, Button, Drawer,
    List, ListItem, ListItemText, Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

export default function AppHeader() {
    const { data: session } = useSession();
    const router = useRouter();
    const pathname = usePathname();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>
                <Link href="/profile" style={{ color: "unset", textDecoration: "none" }}>Profile</Link>
            </MenuItem>
            <MenuItem onClick={() => {
                handleMenuClose();
            }}>Logout</MenuItem>
        </Menu>
    );

    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'News', href: '/news' },
        { label: 'Events', href: '/events' },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ background: "#fff", color: "#000" }}>
                <Container disableGutters>
                    <Toolbar>
                        <Box sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
                            <Image
                                src="/logo/logo.jpg"
                                alt="Vietnam Innovation Gateway Logo"
                                width={70}
                                height={70}
                            />
                        </Box>

                        <Box sx={{ flexGrow: 1 }} />

                        {/* Desktop menu */}
                        <Box sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: 2,
                            alignItems: 'center',
                        }}>
                            {menuItems.map(item => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    style={{
                                        color: 'inherit',
                                        textDecoration: 'none',
                                        fontWeight: pathname === item.href ? 'bold' : 'normal',
                                        borderBottom: pathname === item.href ? '2px solid #1976d2' : 'none',
                                        paddingBottom: 4
                                    }}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            {
                                session ? (
                                    <Avatar onClick={handleProfileMenuOpen} sx={{ cursor: 'pointer' }}>U1</Avatar>
                                ) : (
                                    <Button>
                                        <Link href="/auth/login" style={{ color: 'inherit', textDecoration: 'none' }}>
                                            Đăng nhập
                                        </Link>
                                    </Button>
                                )
                            }
                        </Box>

                        {/* Mobile icon */}
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton onClick={toggleDrawer(true)}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Drawer for mobile */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                <Box
                    sx={{ width: 250 }}
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        {menuItems.map((item) => (
                            <Link key={item.href} href={item.href} passHref>
                                <ListItem
                                    sx={{
                                        '&.Mui-selected': {
                                            backgroundColor: '#e3f2fd',
                                            fontWeight: 'bold',
                                        },
                                    }}
                                >
                                    <ListItemText primary={item.label} />
                                </ListItem>
                            </Link>
                        ))}
                        <Divider />
                        {
                            session ? (
                                <ListItem onClick={handleProfileMenuOpen}>
                                    <ListItemText primary="Profile" />
                                </ListItem>
                            ) : (
                                <Link href="/auth/login" passHref>
                                    <ListItem>
                                        <ListItemText primary="Đăng nhập" />
                                    </ListItem>
                                </Link>
                            )
                        }
                    </List>
                </Box>
            </Drawer>

            {renderMenu}
        </Box>
    );
}
