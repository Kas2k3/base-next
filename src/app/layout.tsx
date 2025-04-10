import AppFooter from "@/components/footer/app.footer";
import AppHeader from "@/components/header/app.header";
import ThemeRegistry from "@/components/theme-registry/theme.registry";
import AuthWrapper from "@/lib/auth.wrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AuthWrapper>
            <AppHeader></AppHeader>
            {children}
            <AppFooter></AppFooter>
          </AuthWrapper>
        </ThemeRegistry>
      </body>
    </html>
  );
}
