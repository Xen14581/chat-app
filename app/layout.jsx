import './globals.css'
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Chat",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
