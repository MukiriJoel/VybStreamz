"use client"
// import type { Metadata } from "next";  
import "./globals.css";
import localFont from "next/font/local";
import { AuthProvider } from "@/lib/context/AuthContext";
import { ThemeProvider } from "@/lib/context/ThemeContext";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store";
// ✅ Required slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// export const metadata: Metadata = {
//   title: "Vybz Streams",
//   description: "Created with v0",
//   generator: "v0.app",
// };

const proximaFont = localFont({
  src: [
    {
      path: "../public/fonts/ProximaNova-Semibold.otf",
      weight: "400", //normal
      style: "normal",
    },
    {
      path: "../public/fonts/ProximaNova-Semibold.otf",
      weight: "500", //medium
      style: "normal",
    },
    {
      path: "../public/fonts/ProximaNova-Bold.otf",
      weight: "600", //semibold
      style: "normal",
    },
    {
      path: "../public/fonts/ProximaNova-Bold.otf",
      weight: "700", //bold
      style: "normal",
    },
    {
      path: "../public/fonts/ProximaNova-Bold.otf",
      weight: "800", // extrabold
      style: "normal",
    },
    {
      path: "../public/fonts/ProximaNova-Bold.otf",
      weight: "900", // black
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-proximanova",
});

// Loading component for PersistGate
function PersistLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}

// Client-side providers wrapper
function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Provider store={store}>
        <PersistGate loading={<PersistLoading />} persistor={persistor}>
          <ThemeProvider>{children}</ThemeProvider>
        </PersistGate>
      </Provider>
    </AuthProvider>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${proximaFont.variable}`}>
      <head>
        <style>{`
html {
   font-family: ${proximaFont.style.fontFamily};
  --font-sans: ${proximaFont.variable};
  --font-mono: ${proximaFont.variable};
}
        `}</style>
      </head>
      <body className={proximaFont.className}>
          <Providers>{children}</Providers>              
      </body>
    </html>
  );
}
