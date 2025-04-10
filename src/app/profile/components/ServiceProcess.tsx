import { Box, Typography, Stack, Button } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const services = [
    'Patent/Utility Solution Registration Services.',
    'Industrial Design Registration Services.',
];

export default function ServiceProcess() {
    return (
        <Box>
            <Typography variant="subtitle1" fontWeight={600} mb={2}>
                Service Process
            </Typography>
            <Stack spacing={2}>
                {services.map((service, idx) => (
                    <Stack key={idx} direction="row" spacing={2} alignItems="center">
                        <SupportAgentIcon color="primary" />
                        <Typography>{service}</Typography>
                    </Stack>
                ))}
            </Stack>
            <Button sx={{ mt: 2 }}>+ Explore more service</Button>
        </Box>
    );
}
