import "@workspace/ui/styles/globals.css";
import { ThemeProvider } from "@workspace/ui/components/shared/theme-provider";
import { Providers } from "@workspace/ui/components/shared/providers";
import Navbar from "@workspace/ui/components/gmh/gmh-navbar-02";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className="">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
            <Navbar />
              {children}
            </ThemeProvider>
        </body>
      </html>
    </>
  );
}
