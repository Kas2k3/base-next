import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt"

interface IUser {
    id: string;
    name: string;
    email: string;
    role: string;
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken: string;
        refreshToken: string;
        IUser
    }
}

declare module "next-auth" {
    interface Session {
        accessToken: string;
        refreshToken: string;
        IUser
    }
}

