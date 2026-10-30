import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function Layout({
  children,
  onOpenCommandPalette,
}: {
  children: React.ReactNode;
  onOpenCommandPalette: () => void;
}) {
  return (
    <div className="flex flex-col min-h-screen antialiased text-foreground bg-background selection:bg-primary/20 relative">
      {/* Skip to Content for keyboard users / a11y */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg"
      >
        Skip to main content
      </a>

      {/* Clean subtle background grid */}
      <div
        className="fixed inset-0 -z-10 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <Navbar onOpenCommandPalette={onOpenCommandPalette} />
      <main id="main-content" className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  );
}
