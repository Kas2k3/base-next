import { Box, Paper } from '@mui/material';

export default function ProfileContainer({ children }: { children: React.ReactNode }) {
    return (
        <Paper elevation={3} sx={{ borderRadius: 3, overflow: 'hidden', p: { xs: 2, md: 4 } }}>
            {children}
        </Paper>
    );
}
