"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
    Box,
    Typography,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Link,
    Paper,
    Container,
    IconButton,
    Alert,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function AuthLogin() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const [isErrorEmail, setIsErrorEmail] = useState<boolean>(false);
    const [isErrorPassword, setIsErrorPassword] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);
    const [errorEmail, setErrorEmail] = useState<string>("");
    const [errorPassword, setErrorPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorEmail("");
        setErrorPassword("");

        if (!email) {
            setIsErrorEmail(true);
            setErrorEmail("Email không được để trống.")
            return
        }

        if (!password) {
            setIsErrorPassword(true);
            setErrorPassword("Password không được để trống.")
            return
        }
        setIsLoading(false);
    };

    return (
        <Container maxWidth="sm" sx={{ py: 8 }}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: "8px" }}>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Image
                            src="/logo/logo.jpg"
                            alt="Vietnam Innovation Gateway"
                            width={50}
                            height={50}
                        />
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                fontWeight: "bold",
                                textTransform: "uppercase",
                                lineHeight: 1.2,
                            }}
                        >
                            VIETNAM INNOVATION <br /> GATEWAY
                        </Typography>
                    </Box>
                </Box>

                <Box component="form" onSubmit={handleSubmit} noValidate>
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
                            Tên đăng nhập / Email
                        </Typography>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            name="email"
                            autoComplete="email"
                            error={isErrorEmail}
                            helperText={errorEmail}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant="outlined"
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "4px",
                                },
                            }}
                        />
                    </Box>

                    <Box sx={{ mb: 2 }}>
                        <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
                            Mật khẩu
                        </Typography>
                        <TextField
                            required
                            fullWidth
                            name="password"
                            type={showPassword ? "text" : "password"}
                            id="password"
                            autoComplete="current-password"
                            error={isErrorPassword}
                            helperText={errorPassword}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            variant="outlined"
                            slotProps={{
                                input: {
                                    endAdornment: (
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleTogglePassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    ),
                                }
                            }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "4px",
                                },
                            }}
                        />
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: 3,
                        }}
                    >
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    name="rememberMe"
                                    color="primary"
                                    sx={{
                                        color: "grey.400",
                                        "&.Mui-checked": {
                                            color: "primary.main",
                                        },
                                    }}
                                />
                            }
                            label={
                                <Typography variant="body2" color="text.secondary">
                                    Ghi nhớ đăng nhập
                                </Typography>
                            }
                        />
                        <Link
                            href="/auth/forgot-password"
                            variant="body2"
                            sx={{
                                color: "primary.main",
                                textDecoration: "none",
                                "&:hover": {
                                    textDecoration: "underline",
                                },
                            }}
                        >
                            Quên mật khẩu?
                        </Link>
                    </Box>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={isLoading}
                        sx={{
                            py: 1.5,
                            mb: 2,
                            borderRadius: "4px",
                            textTransform: "none",
                            fontSize: "1rem",
                        }}
                    >
                        {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
                    </Button>

                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="body2" color="text.secondary">
                            Bạn chưa có tài khoản?{" "}
                            <Link
                                href="/auth/register"
                                sx={{
                                    color: "primary.main",
                                    textDecoration: "none",
                                    fontWeight: 500,
                                    "&:hover": {
                                        textDecoration: "underline",
                                    }
                                }
                                }
                            >
                                Đăng ký
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
}
