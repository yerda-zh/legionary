import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './_components/navbar/Navbar'
const inter = Inter({ subsets: ['latin'] })
import StyledComponentsRegistry from './lib/registry';

export const metadata = {
  title: 'Legionary',
  description: 'AI based training helper website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Navbar />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
