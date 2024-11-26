import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/provider/ThemeProvider";

export const metadata: Metadata = {
  title: "대광 PC",
  description: "광주광역시, 전라남도 권역 PC 암거/설치 전문",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kor">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
