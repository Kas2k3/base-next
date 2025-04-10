import { Box, Typography, Stack, Button } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';

const events = [
    { name: 'THE 5TH ANNIVERSARY CELEBRATION OF THE CENTER’S ESTABLISHMENT', date: '14th April' },
    { name: 'Workshop: Safeguarding Revenue through Intellectual...', date: '27th March' },
];

export default function EventOfInterest() {
    return (
        <Box mb={4}>
            <Typography variant="subtitle1" fontWeight={600} mb={2}>
                Event of Interest
            </Typography>
            <Stack spacing={2}>
                {events.map((event, idx) => (
                    <Stack key={idx} direction="row" spacing={2} alignItems="center">
                        <EventIcon color="primary" />
                        <Box>
                            <Typography fontWeight={600}>{event.name}</Typography>
                            <Typography variant="body2" color="text.secondary">{event.date}</Typography>
                        </Box>
                    </Stack>
                ))}
            </Stack>
            <Button sx={{ mt: 2 }}>+ Explore more events</Button>
        </Box>
    );
}
