import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import { NuqsAdapter } from 'nuqs/adapters/next/app'
// Importing the Inter font from Google Fonts with specific weights and subsets
const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Exclusive - Produits de Qualité",
  description: "Découvrez notre sélection de produits de haute qualité à des prix compétitifs. Livraison rapide et service client exceptionnel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NuqsAdapter>
           <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header/>
            {children}
          </ThemeProvider>
        </NuqsAdapter>
       
        
      </body>
    </html>
  );
}
