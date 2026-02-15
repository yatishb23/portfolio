import "./globals.css";
import Navbar from "@/components/Layouts/Navbar";
import { Provider } from "@/components/theme/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Visitors from "@/components/Visitors";
import { IBM_Plex_Sans } from "next/font/google";

export const metadata = {
  title: "Yatish Badgujar",
  description: "Product Designer & Developer",
};

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className={ibmPlexSans.variable}>
        <head />
        <body>
          <Provider>
            <TooltipProvider>
              <Visitors/>
              <Navbar />
              {children}
            </TooltipProvider>
          </Provider>
        </body>
      </html>
    </>
  );
}
