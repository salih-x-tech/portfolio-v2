import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://salih-portfolio-seven.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Salih Hayat | Full-Stack Developer",
    template: "%s | Salih Hayat",
  },

  description:
    "Salih Hayat is a Full-Stack Developer specializing in JavaScript, React, Next.js, and AI-powered web applications.",

  keywords: [
    "Salih Hayat",
    "Salih X Tech",
    "Full-Stack Developer",
    "JavaScript Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer",
    "AI Developer",
    "AI Web Developer",
    "Frontend Developer",
    "Backend Developer",
  ],

  authors: [
    {
      name: "Salih Hayat",
      url: siteUrl,
    },
  ],

  creator: "Salih Hayat",
  publisher: "Salih Hayat",

  applicationName: "Salih Hayat Portfolio",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Salih Hayat",
    title: "Salih Hayat | Full-Stack Developer",
    description:
      "Portfolio of Salih Hayat — Full-Stack Developer building modern web applications with JavaScript, React, Next.js, and AI.",
    images: [
      {
        url: "/images/salih-hayat.png",
        width: 1200,
        height: 630,
        alt: "Salih Hayat - Full-Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Salih Hayat | Full-Stack Developer",
    description:
      "Full-Stack Developer building modern web applications with JavaScript, React, Next.js, and AI.",
    images: ["/images/salih-hayat.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  {children}

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Salih Hayat",
        url: "https://salih-portfolio-seven.vercel.app",
        jobTitle: "Full-Stack Developer",
        description:
          "Full-Stack Developer specializing in JavaScript, React, Next.js, and AI-powered web applications.",
        image: "https://salih-portfolio-seven.vercel.app/images/salih-hayat.png",
        sameAs: [
          "https://github.com/salih-x-tech",
          "https://www.linkedin.com/in/salih-hayat-b30097332",
        ],
        knowsAbout: [
          "JavaScript",
          "React",
          "Next.js",
          "Node.js",
          "MongoDB",
          "Full-Stack Development",
          "Web Development",
          "Artificial Intelligence",
        ],
      }),
    }}
  />
</body>
    </html>
  );
}