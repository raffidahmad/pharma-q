import { Inter } from 'next/font/google';
import './globals.css';
import SideNav from '@/layouts/Drawer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pharma Questions',
  description: 'A place to ask questions about pharmaceuticals',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* <Navbar /> */}
        <SideNav>{children}</SideNav>
      </body>
    </html>
  );
}
