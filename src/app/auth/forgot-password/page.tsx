import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ForgotPassword from "@/components/auth/ForgotPassword";
import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation'

const ForgotPasswordPage = async () => {
    const session = await getServerSession(authOptions)
    if (session) {
        redirect("/");
    }
    return (
        <ForgotPassword />
    )
}

export default ForgotPasswordPage;