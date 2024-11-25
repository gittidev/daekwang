"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // 또는 로딩 상태를 표시
  }

  return (
    <NextThemesProvider
      {...props}
      attribute="class"
      // defaultTheme="system" // 초기 테마 설정
      enableSystem={false}
    >
      {children}
    </NextThemesProvider>
  );
}
