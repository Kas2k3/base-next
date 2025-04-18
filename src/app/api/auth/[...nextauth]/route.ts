import { IBackendRes } from './../../../../types/backend.d';
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { sendRequest } from '@/utils/api';
import { JWT } from 'next-auth/jwt';

export const authOptions = {
    secret: process.env.NO_SECRET,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const res = await sendRequest<IBackendRes<JWT>>({
                    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
                    method: "POST",
                    body: {
                        email: credentials?.email,
                        password: credentials?.password
                    }
                });

                if (res && res.data) {
                    return res.data as any;
                } else {
                    return new Error(res?.message);
                }
            }
        })
    ],
    callbacks: {

    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
