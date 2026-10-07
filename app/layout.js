import "./globals.css";

export const metadata = {
  title: "Feitosatech — Tecnologia que move seu negócio",
  description:
    "Feitosatech. Tecnologia para simplificar processos, conectar sistemas e transformar ideias em soluções digitais.",
};

export const viewport = { themeColor: "#101411" };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
