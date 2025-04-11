import AppFooter from "@/components/footer/app.footer";
import AppHeader from "@/components/header/app.header";
import AuthWrapper from "@/lib/auth.wrapper";
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthWrapper>
          <div
            style={{
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              position: "sticky",
              top: 0,
              zIndex: 1000,
              backgroundColor: "#fff",
            }}
          >
            <AppHeader />
          </div>

          <main className="pt-[85px]">
            {children}
          </main>

          <AppFooter />
        </AuthWrapper>
      </body>
    </html>
  );
}
