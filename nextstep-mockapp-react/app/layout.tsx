import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Step Travel – Slides & Mock",
  description: "AIが先回りして“次の一手”を提示する旅行体験プロダクトの提案とモック",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-white text-gray-900">{children}</body>
    </html>
  );
}
