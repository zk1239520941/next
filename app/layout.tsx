/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangkun
 * @Date: 2024-02-23 11:16:46
 * @LastEditors: zhangkun
 * @LastEditTime: 2024-02-23 11:35:27
 */
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
