import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";

export const metadata = {
  metadataBase: new URL("https://portfolio-ibtesam-taha.vercel.app"),
  title: "Ibtesam Taha | Full Stack Developer",
  description:
    "Full Stack Developer building modern web applications with Next.js, TypeScript, Node.js, and scalable backend technologies.",
  keywords: [
    "Ibtesam",
    "Taha",
    "Ibtesam Taha",
    "Taha developer",
    "Ibtesam portfolio",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Bangladesh Developer"
  ],
  alternates: {
    canonical: "/",
  },
  authors: [
    { name: "Ibtesam Taha", url: "https://portfolio-ibtesam-taha.vercel.app" }
  ],
  creator: "Ibtesam Taha",

  verification: {
    google: "Uu0xY9pNNCu16yRJRmUN9kc3PNR2zcXdiEBbIywuU0Y"
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-ibtesam-taha.vercel.app",
    title: "Ibtesam Taha | Full Stack Developer",
    description:
      "Full Stack Developer building modern web applications with Next.js, TypeScript, Node.js, and scalable backend technologies.",
    siteName: "Ibtesam Taha Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Ibtesam Taha | Full Stack Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ibtesam Taha | Full Stack Developer",
    description:
      "Full Stack Developer building modern web applications with Next.js, TypeScript, Node.js, and scalable backend technologies.",
    images: ["/images/profile.jpg"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ibtesam Taha",
  alternateName: ["Taha", "Ibtesam", "Taha Developer"],
  url: "https://portfolio-ibtesam-taha.vercel.app",
  jobTitle: "Full Stack Developer",
  description: "Full Stack Developer building modern web applications across frontend, backend, databases, and deployment.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "Bangladesh",
  },
  sameAs: [
    "https://github.com/Tahaimage8",
    "https://www.facebook.com/ibtesamtaha1/",
    "https://www.instagram.com/ibtesamtaha1",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </head>

      <body className="w-full overflow-x-hidden antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        <SmoothScroll>
          <Cursor />

          <div className="relative min-h-screen w-full overflow-hidden">
            <div className="glow-aura pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl animate-glow" />
            <div
              className="glow-aura pointer-events-none absolute top-1/2 -right-20 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl animate-glow"
              style={{ animationDelay: "-2s" }}
            />
            <div
              className="glow-aura pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl animate-glow"
              style={{ animationDelay: "-4s" }}
            />

            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}