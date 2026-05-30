import "./globals.css";
import Navbar from "@/components/Layouts/Navbar";
import Footer from "@/components/Sections/LandingPages/Footer";
import Collab from "@/components/Sections/LandingPages/Contact";
import { Provider } from "@/components/theme/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Visitors from "@/components/Visitors";
import { Inter } from "next/font/google";
import { SectionPanel } from "@/components/SectionPanel";
import { Section } from "@/components/Layouts/Section";

export const metadata = {
  metadataBase: new URL("https://yatish-badgujar.vercel.app"),
  title: {
    default: "Yatish Badgujar | Frontend Developer & Product Designer",
    template: "%s | Yatish Badgujar",
  },
  description:
    "Product Designer & Frontend Developer based in Pune, India. Specializing in React, Next.js, TypeScript, and building high-fidelity digital experiences.",
  openGraph: {
    title: "Yatish Badgujar | Frontend Developer & Product Designer",
    description:
      "Product Designer & Frontend Developer based in Pune, India. Specializing in React, Next.js, TypeScript, and building high-fidelity digital experiences.",
    url: "https://yatish-badgujar.vercel.app",
    siteName: "Yatish Badgujar",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://yatish-badgujar.vercel.app/share.png",
        width: 1200,
        height: 630,
        alt: "Yatish Badgujar - Frontend Developer & Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yatish Badgujar | Frontend Developer & Product Designer",
    description:
      "Product Designer & Frontend Developer based in Pune, India.",
    images: ["https://yatish-badgujar.vercel.app/share.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: "googleb8955d72d472ea77",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yatish Badgujar",
  url: "https://yatish-badgujar.vercel.app",
  jobTitle: "Frontend Developer & Product Designer",
  description:
    "Product Designer & Frontend Developer based in Pune, India.",
  sameAs: [
    "https://github.com/yatish-badgujar",
    "https://linkedin.com/in/yatish-badgujar",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Provider>
          <TooltipProvider>
            <Visitors />
            <main className="max-w-screen overflow-x-hidden px-2">
              <div className="mx-auto md:max-w-3xl">
                <Navbar />
                {children}
                <div className="stripe-divider" />
                <Section id="thoughts" label="Lets Connect" num="XX">
                  <p className="text-[12px] text-zinc-500 mb-4">
                    Thank you for visiting my portfolio! If you'd like to get in
                    touch, have any questions, or just want to say hi, feel free
                    to reach out. I'm always open to new opportunities and
                    collaborations.
                  </p>
                  <Footer />
                </Section>
              </div>
            </main>
          </TooltipProvider>
        </Provider>
      </body>
    </html>
  );
}
