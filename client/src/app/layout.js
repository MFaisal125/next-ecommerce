import Auth from "./auth";
import Providers from "./providers";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  metadataBase: new URL("https://next-e-commerce1.vercel.app"),
  title: "E-Commerce",
  description:
    "Explore the latest in fashion trends, from chic clothing and accessories to statement footwear. Stay ahead in style with exclusive collections and amazing discounts.",
  openGraph: {
    title: "E-Commerce Application",
    description:
      "Explore the latest in fashion trends, from chic clothing and accessories to statement footwear. Stay ahead in style with exclusive collections and amazing discounts.",
    url: "https://next-e-commerce1.vercel.app",
    siteName: "My E-Commerce Application",
    images: "",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "",
    title: "E-Commerce Application",
    description:
      "Explore the latest in fashion trends, from chic clothing and accessories to statement footwear. Stay ahead in style with exclusive collections and amazing discounts.",
    image: "",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Auth>{children}</Auth>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
