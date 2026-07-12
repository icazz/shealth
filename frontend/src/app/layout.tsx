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
    default: 'SHEALTH',
    template: '%s | SHEALTH',
  },
  description:
    'SHEalth.id is a women based community for those who are passionate about living a healthier and more balanced life.',
  keywords: ['shealth', 'komunitas kesehatan', 'event kesehatan', 'she activity'],
  authors: [{ name: 'SHEALTH Team' }],
  openGraph: {
    title: 'SHEALTH — Community',
    description: 'Woman Community',
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
