import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Bảng Phối Màu & Kiểu Dáng Trang Phục Nam",
  description:
    "Công thức phối đồ dạo phố, đi chơi chuẩn phong cách và tỷ lệ hình khối",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
