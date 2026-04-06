import "./globals.css";
import Navbar from "@/components/Layouts/Navbar";
import Footer from "@/components/Sections/LandingPages/Footer";
import Collab from "@/components/Sections/LandingPages/Contact";
import { Provider } from "@/components/theme/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Visitors from "@/components/Visitors";
import { Inter } from "next/font/google";
import { SectionPanel } from "@/components/SectionPanel";

export const metadata = {
  title: "Yatish Badgujar",
  description: "Product Designer & Developer",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head />
      <body
        className="min-h-screen bg-neutral-50 dark:bg-[#09090b] text-neutral-800 dark:text-neutral-300 font-light selection:bg-neutral-200 dark:selection:bg-neutral-700"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <Provider>
          <TooltipProvider>
            <Visitors />
            <main className="max-w-screen overflow-x-hidden px-2">
              <div className="mx-auto md:max-w-3xl">
                <Navbar />
                {children}
                <div className="stripe-divider" />

                <SectionPanel id="collab" title="Collab">
                  <p className="text-[12px] text-zinc-500 mb-4">
                    Interested in collaborating or have a project in mind? Let's
                    connect and create something amazing together!
                  </p>
                  <Collab />
                </SectionPanel>
                <div className="stripe-divider" />
                <SectionPanel id="footer" title="Footer">
                  <p className="text-[12px] text-zinc-500 mb-4">
                    Thank you for visiting my portfolio! If you'd like to get in
                    touch, have any questions, or just want to say hi, feel free
                    to reach out. I'm always open to new opportunities and
                    collaborations.
                  </p>
                  <Footer />
                </SectionPanel>
              </div>
            </main>
          </TooltipProvider>
        </Provider>
      </body>
    </html>
  );
}
