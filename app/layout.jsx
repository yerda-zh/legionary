import "./globals.css";
import { Outfit, Lato } from "next/font/google";
import Navbar from "./_components/navbar/Navbar";
import StyledComponentsRegistry from "./lib/registry";
import ReduxProvider from "./redux/redux.provider";
import { SpeedInsights } from "@vercel/speed-insights/next"

const fontMain = Outfit({
  subsets: ["latin"],
  variable: '--font-main',
  display: 'swap',
});
const fontSecondary = Lato({ 
  subsets: ["latin"],
  weight: '400',
  variable: '--font-secondary',
  display: 'swap',
});

export const metadata = {
  title: "Legionary",
  description: "AI based training helper",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fontMain.variable} ${fontSecondary.variable}`}>
      <body>
        <ReduxProvider>
          <StyledComponentsRegistry>
            <Navbar/>
            {children}
          </StyledComponentsRegistry>
        </ReduxProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
