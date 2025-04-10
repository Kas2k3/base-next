import { Box, Avatar, Typography, Button, Stack } from '@mui/material';

export default function ProfileHeader() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
            <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                    alt="Huynh Thanh Dat"
                    src="/path-to-avatar.jpg"
                    sx={{ width: 80, height: 80 }}
                />
                <Box>
                    <Typography variant="h6">Huynh Thanh Dat</Typography>
                    <Typography variant="body2" color="text.secondary">
                        huynhthanhdat@gmail.com
                    </Typography>
                </Box>
            </Stack>
            <Button sx={{ width: 80, height: 40 }} variant="contained">Edit</Button>
        </Box>
    );
}
