import { Box, Typography, Stack } from '@mui/material';

const info = {
    fullName: 'Huynh Thanh Dat',
    dob: '08/26/1962',
    organization: 'Ministry of Science and Technology',
    position: 'Minister',
    country: 'Vietnam',
    phone: '0912345678',
};

function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <Box display="flex" flexDirection="column" flex={1} minWidth={250}>
            <Typography variant="body2" color="text.secondary" mb={0.5}>
                {label}
            </Typography>
            <Typography variant="body1" fontWeight={400}>
                {value}
            </Typography>
        </Box>
    );
}

export default function ProfileInfo() {
    return (
        <Stack spacing={4}>
            <Box display="flex" flexWrap="wrap" gap={4}>
                <InfoRow label="Full Name" value={info.fullName} />
                <InfoRow label="Date of birth" value={info.dob} />
            </Box>
            <Box display="flex" flexWrap="wrap" gap={4}>
                <InfoRow label="Organization" value={info.organization} />
                <InfoRow label="Position" value={info.position} />
            </Box>
            <Box display="flex" flexWrap="wrap" gap={4}>
                <InfoRow label="Country" value={info.country} />
                <InfoRow label="Phone number" value={info.phone} />
            </Box>
        </Stack>
    );
}
