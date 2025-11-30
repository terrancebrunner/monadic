import "@workspace/ui/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Providers } from "@/components/providers";
import Navbar from "@workspace/ui/components/gmh/gmh-navbar-02";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className="">
          <Providers>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
            <Navbar />
              {children}
            </ThemeProvider>
          </Providers>
        </body>
      </html>
    </>
  );
}
