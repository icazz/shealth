import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    default: 'SHEALTH — Komunitas Kesehatan',
    template: '%s | SHEALTH',
  },
  description:
    'SHEALTH adalah komunitas kesehatan yang mengedukasi dan menginspirasi masyarakat untuk hidup lebih sehat.',
  keywords: ['shealth', 'komunitas kesehatan', 'event kesehatan', 'she activity'],
  authors: [{ name: 'SHEALTH Team' }],
  openGraph: {
    title: 'SHEALTH — Komunitas Kesehatan',
    description: 'Komunitas kesehatan yang mengedukasi dan menginspirasi.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
