'use client';

import { useEffect, useState } from 'react';
import { UserProfile } from './types';
import ProfileContent from './ProfileContent';

export default function ProfileContainer() {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/profile`, {
                    credentials: 'include',
                });

                const data = await res.json();
                setProfile(data.data);
            } catch (error) {
                console.error('Lỗi khi lấy profile:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (!profile) return <p>Không thể tải thông tin người dùng</p>;

    return <ProfileContent profile={profile} />;
}
