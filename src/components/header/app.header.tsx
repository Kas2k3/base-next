'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react'
import { Button } from '@mui/material';

export default function AppHeader() {
    const { data: session } = useSession();
    const router = useRouter()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            // anchorOrigin={{
            //     vertical: 'top',
            //     horizontal: 'right',
            // }}
            id={menuId}
            keepMounted
            // transformOrigin={{
            //     vertical: 'top',
            //     horizontal: 'right',
            // }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem>
                <Link href={"profile"}
                    style={{
                        color: "unset",
                        textDecoration: "unset"
                    }} >
                    Profile
                </Link>
            </MenuItem>
            <MenuItem onClick={() => {
                handleMenuClose()
            }}>Logout</MenuItem>
        </Menu >
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    const handleRedirectHome = () => {
        router.push("/")
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static"
                sx={{
                    background: "#ffffff",
                    color: "#000000"
                }}>
                <Container disableGutters>
                    <Toolbar>
                        <Box sx={{ cursor: "pointer", display: "flex" }}>
                            <Box >
                                <Image
                                    src="/logo/logo.jpg"
                                    alt="Vietnam Innovation Gateway Logo"
                                    width={50}
                                    height={50}
                                />
                            </Box>
                            <Typography
                                onClick={() => handleRedirectHome()}
                                variant="h6"
                                component="div"
                                sx={{ fontWeight: 'bold', textTransform: 'uppercase', lineHeight: 1.2 }}>
                                VIETNAM INNOVATION <br /> GATEWAY
                            </Typography>
                        </Box>

                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: "20px",
                            alignItems: "center",
                            cursor: "pointer",
                            "> a": {
                                color: "unset",
                                textDecoration: "unset"
                            }
                        }}>
                            <Link href={"/"}>Home</Link>
                            <Link href={"/about"}>About</Link>
                            <Link href={"/services"}>Services</Link>
                            <Link href={"/news"}>News</Link>
                            <Link href={"/events"}>Events</Link>
                            <Link href={"/contact"}>Contact</Link>
                            {
                                session ?
                                    <p>
                                        <Avatar
                                            onClick={handleProfileMenuOpen}
                                        >U1</Avatar>
                                    </p>
                                    :
                                    <Button sx={{
                                        "> a": {
                                            color: "unset",
                                            textDecoration: "unset"
                                        }
                                    }}>
                                        <Link href={"/auth/login"}>
                                            Đăng nhập
                                        </Link>
                                    </Button>
                            }

                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box >
    );
}
