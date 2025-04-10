import AuthLogin from "@/components/auth/auth.login";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation'

const LoginPage = async () => {
    const session = await getServerSession(authOptions)
    if (session) {
        redirect("/");
    }
    return (
        <AuthLogin />
    )
}

export default LoginPage;