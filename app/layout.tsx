import "./globals.css";
import Navbar from "@/components/Layouts/Navbar";
import { Provider } from "@/components/theme/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata = {
  title: "Yatish Badgujar",
  description: "Product Designer & Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
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
