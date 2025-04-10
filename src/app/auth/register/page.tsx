import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AuthRegister from "@/components/auth/AuthRegister";
import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation'

const RegisterPage = async () => {
    const session = await getServerSession(authOptions)
    if (session) {
        redirect("/");
    }
    return (
        <AuthRegister />
    )
}

export default RegisterPage;