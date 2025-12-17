import { ThemeProvider } from "@workspace/ui/components/blocks/shared/theme-provider";
// import { Providers } from "@workspace/ui/components/blocks/shared/providers";
import Navbar from "@workspace/ui/components/gmh/blocks/gmh-navbar-02";

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
