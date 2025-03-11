import "./globals.css";
import "./styles/fonts.css";

export const metadata = {
  title: "گروه تیسا | Tisa Group",
  description: "ارائه دهنده راهکارهای صنعتی و خدمات فنی و مهندسی",
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#007bff",
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>{children}</body>
    </html>
  );
}