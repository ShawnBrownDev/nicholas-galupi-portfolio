import './globals.css';
import type { Metadata } from 'next';
import { Inter, Orbitron, Rajdhani } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '700', '900']
});
const rajdhani = Rajdhani({ 
  subsets: ['latin'],
  variable: '--font-rajdhani',
  weight: ['300', '400', '600', '700']
});

export const metadata: Metadata = {
  title: 'Space Portfolio | Digital Explorer',
  description: 'Exploring digital galaxies through code & creativity',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${orbitron.variable} ${rajdhani.variable}`}>
        {children}
      </body>
    </html>
  );
}