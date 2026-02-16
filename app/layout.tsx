import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "우리동네 - 내 동네, 제대로 알고 살펴보세요",
  description:
    "임장노트, 도달권 분석, 커뮤니티까지. 이사·임장 고민, 우리동네 앱 하나로 해결하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
