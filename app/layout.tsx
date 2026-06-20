import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Astronicle — Portfolio OS',
  description: 'A desktop OS-themed portfolio for Astronicle, full-stack software developer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
