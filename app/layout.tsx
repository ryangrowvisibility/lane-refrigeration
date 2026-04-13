import type { Metadata } from "next";
import { Domine, Hind } from "next/font/google";
import "./globals.css";

const domine = Domine({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
});

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lane Refrigeration | Bakersfield's Most Trusted HVAC & Refrigeration",
  description:
    "Dan Lane — the only HVAC technician Bakersfield trusts. Licensed in refrigeration, HVAC, electrical, and plumbing. Honest work, fast results since 2012.",
  openGraph: {
    title: "Lane Refrigeration | Honest HVAC & Refrigeration in Bakersfield",
    description:
      "Dan Lane fixes exactly what needs to be fixed. No upselling, no guessing. Multi-licensed HVAC & refrigeration contractor since 2012.",
    images: [
      {
        url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHuUjzz6fbYo07A9M-LBCcu2gRQYqUO8IdnQP7Dixnxtp9MwDI9ap2n1Rl9il3mO7xdWrJHDvDg9M3xJ31wXspRQGo2iaJERyS3V57aWns3obrKrjfG03JBhHsjuLjvsigJxbTcT0tKqSgw=w800-h600",
        width: 800,
        height: 600,
        alt: "Lane Refrigeration Bakersfield",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${domine.variable} ${hind.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Lane Refrigeration",
              founder: { "@type": "Person", name: "Daniel Lane" },
              telephone: "(661) 859-4276",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2300 Mountain Oak Rd",
                addressLocality: "Bakersfield",
                addressRegion: "CA",
                postalCode: "93311",
                addressCountry: "US",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                  opens: "08:00",
                  closes: "17:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "1",
                bestRating: "5",
              },
              foundingDate: "2012",
              areaServed: "Bakersfield, CA",
              knowsAbout: ["HVAC", "Refrigeration", "Electrical", "Plumbing"],
              sameAs: ["https://www.linkedin.com/in/dan-lane-7135358a"],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
