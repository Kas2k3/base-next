import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import AppFooter from '@/components/footer/app.footer';
import AppHeader from '@/components/header/app.header';
import AuthWrapper from '@/lib/auth.wrapper';
import LanguageSwitcher from '@/components/button/LanguageSwitcher';
import './globals.css';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <AuthWrapper>
            <div
              style={{
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                backgroundColor: '#fff',
              }}
            >
              <AppHeader />
            </div>

            <main >{children}</main>

            <AppFooter />
          </AuthWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}