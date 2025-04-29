import "./globals.css";

import { Inter } from "next/font/google";
import { themeEffect } from "./theme-effect";
import { Analytics } from "./analytics";
import { Header } from "./header";
import { Footer } from "./footer";
import { doge } from "./doge";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Greg Charles's blog",
  description:
    "Greg Charles is a growth marketing and product leader. He is the founder of Parallel AI, and owner of coldplungetubs.com, and is known for building 0 -> 1 systems that unlock rapid growth and operating leverage.",
  openGraph: {
    title: "Greg Charles's blog",
    description:
      "Greg Charles is a growth marketing and product leader. He is the founder of Parallel AI, and owner of coldplungetubs.com, and is known for building 0 -> 1 systems that unlock rapid growth and operating leverage.",
    url: "https://gregrc.com",
    siteName: "Greg Charles's blog",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@gcharles10x",
    creator: "@gcharles10x",
  },
  metadataBase: new URL("https://gregrc.com"),
};

export const viewport = {
  themeColor: "transparent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} antialiased`}
      suppressHydrationWarning={true}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();(${doge.toString()})();`,
          }}
        />
      </head>

      <body className="dark:text-gray-100 max-w-2xl m-auto">
        <main className="p-6 pt-3 md:pt-6 min-h-screen">
          <Header />
          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
