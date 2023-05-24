import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "400", "800"] });

export const metadata = {
  title: "Blog de Recetas de Pasteleria Saludable | Naty ",
  description:
    "Recetas de Pastelería Saludable sin gluten, sin lácteos, sin azúcar y sin huevo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
