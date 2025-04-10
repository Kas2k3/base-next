"use client";

import { useState } from "react";
import {
    Box, Typography, TextField, Button, Paper, Container,
    Snackbar, Alert
} from "@mui/material";
import Image from "next/image";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [isErrorEmail, setIsErrorEmail] = useState(false);
    const [errorEmail, setErrorEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [openMessage, setOpenMessage] = useState(false);
    const [resMessage, setResMessage] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsErrorEmail(false);
        setErrorEmail("");
        setIsLoading(true);

        if (!email) {
            setIsErrorEmail(true);
            setErrorEmail("Vui lòng nhập email.");
            setIsLoading(false);
            return;
        }

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
                credentials: "include"
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message || "Gửi yêu cầu thất bại.");

            setResMessage("Liên kết đặt lại mật khẩu đã được gửi tới email.");
            setSuccess(true);
        } catch (err: any) {
            setResMessage(err.message || "Có lỗi xảy ra.");
            setSuccess(false);
        }

        setOpenMessage(true);
        setIsLoading(false);
    };

    return (
        <Container maxWidth="sm" sx={{ py: 8 }}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: "8px" }}>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                    <Image src="/logo/logo.jpg" alt="Vietnam Innovation Gateway" width={70} height={70} />
                </Box>

                <Box component="form" onSubmit={handleSubmit} noValidate>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                        Quên mật khẩu
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                        Nhập địa chỉ email bạn đã đăng ký. Chúng tôi sẽ gửi liên kết để đặt lại mật khẩu.
                    </Typography>

                    <TextField
                        fullWidth required id="email" name="email"
                        label="Email"
                        autoComplete="email"
                        error={isErrorEmail}
                        helperText={errorEmail}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="outlined"
                        sx={{ mb: 3, "& .MuiOutlinedInput-root": { borderRadius: "4px" } }}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={isLoading}
                        sx={{ py: 1.5, borderRadius: "4px", textTransform: "none", fontSize: "1rem" }}
                    >
                        {isLoading ? "Đang gửi yêu cầu..." : "Gửi liên kết đặt lại mật khẩu"}
                    </Button>
                </Box>

                <Snackbar
                    open={openMessage}
                    autoHideDuration={5000}
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    onClose={() => setOpenMessage(false)}
                >
                    <Alert
                        severity={success ? "success" : "error"}
                        sx={{ width: "100%" }}
                        onClose={() => setOpenMessage(false)}
                    >
                        {resMessage}
                    </Alert>
                </Snackbar>
            </Paper>
        </Container>
    );
}
