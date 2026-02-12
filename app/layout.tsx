import "./globals.css";
import Navbar from "@/components/Layouts/Navbar";
import { Provider } from "@/components/theme/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import {Geist} from "next/font/google";

export const metadata = {
  title: "Yatish Badgujar",
  description: "Product Designer & Developer",
};

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className={`${geist.variable}`}>
        <head />
        <body>
          <Provider>
            <TooltipProvider>
            <Navbar/>
            {children}
            </TooltipProvider>
          </Provider>
        </body>
      </html>
    </>
  );
}
