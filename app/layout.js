import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";

export const metadata = {
  title: "Ibtesam Taha | Premium Portfolio",
  description:
    "Modern, animated personal portfolio of Ibtesam Taha, a Frontend Web Developer & MERN Stack Learner.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="w-full overflow-x-hidden antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        <SmoothScroll>
          <Cursor />

          <div className="relative min-h-screen w-full overflow-hidden">
            {/* Global Gradient Backgrounds */}
            <div className="glow-aura pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl animate-glow" />
            <div
              className="glow-aura pointer-events-none absolute top-1/2 -right-20 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl animate-glow"
              style={{ animationDelay: "-2s" }}
            />
            <div
              className="glow-aura pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl animate-glow"
              style={{ animationDelay: "-4s" }}
            />

            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}