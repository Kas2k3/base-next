import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const messages = await getMessages();

    return (
        <html lang="vi">
            <body>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
