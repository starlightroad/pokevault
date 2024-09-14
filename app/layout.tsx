import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/app/_ui/globals.css';
import Navbar from '@/app/_ui/components/navbar';
import Container from '@/app/_ui/components/container';
import { siteConfig } from '@/app/_lib/config';

const geistSans = localFont({
  src: './_ui/fonts/GeistVF.woff',
});

export const metadata: Metadata = {
  title: {
    template: `%s - ${siteConfig.name}`,
    default: siteConfig.name,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <Container>
          <Navbar />
          {children}
        </Container>
      </body>
    </html>
  );
}
