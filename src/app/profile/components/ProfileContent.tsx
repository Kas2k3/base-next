'use client';

import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Typography,
} from '@mui/material';
import { UserProfile } from './types';

interface Props {
    profile: UserProfile;
}

export default function ProfileContent({ profile }: Props) {
    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h5" fontWeight="bold" mb={2}>
                Welcome, {profile.name}
            </Typography>

            <Card sx={{ mb: 4 }}>
                <CardContent sx={{ display: 'flex', gap: 4 }}>
                    <Box textAlign="center">
                        <Avatar
                            alt={profile.name}
                            src="/profile.jpg"
                            sx={{ width: 120, height: 120, mb: 2 }}
                        />
                        <Typography variant="subtitle1">{profile.name}</Typography>
                        <Typography variant="body2">{profile.email}</Typography>
                    </Box>

                    <Box>
                        <Typography variant="body1">
                            <strong>Role:</strong> {profile.role}
                        </Typography>
                        <Button variant="contained" sx={{ mt: 2 }}>
                            Edit
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
