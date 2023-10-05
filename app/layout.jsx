import ReduxProvider from "./redux/redux.provider";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./_components/navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });
import StyledComponentsRegistry from "./lib/registry";

export const metadata = {
  title: "Legionary",
  description: "AI based training helper",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <StyledComponentsRegistry>
            <Navbar />
            {children}
          </StyledComponentsRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
