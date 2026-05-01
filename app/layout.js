import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";

export const metadata = {
  title: "Ibtesam Taha | Premium Portfolio",
  description: "Modern, animated personal portfolio of Ibtesam Taha, a Frontend Web Developer & MERN Stack Learner.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        <SmoothScroll>
          <Cursor />
          <div className="relative  mx-auto ">
            {/* Global Gradient Backgrounds */}
            <div className="glow-aura w-auto h-auto bg-cyan-500/10 -top-20 -left-20 animate-glow" />
            <div className="glow-aura w-auto h-auto bg-purple-500/10 top-1/2 -right-20 animate-glow" style={{ animationDelay: "-2s" }} />
            <div className="glow-aura w-auto h-auto bg-blue-500/10 bottom-0 left-1/4 animate-glow" style={{ animationDelay: "-4s" }} />
            
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
