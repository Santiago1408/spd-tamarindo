import "@/app/globals.css";
import HistoryForm from "@/components/layout/HistoryForm";
import Navbar from "@/components/ui/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body><Navbar />{children}
        <HistoryForm />
      </body>
    </html>
  );
}