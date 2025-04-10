import { Box, Typography } from "@mui/material";

const ServicesPage = () => {
    return (

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
                SERVICES
            </Typography>
        </Box>
    )
}

export default ServicesPage;