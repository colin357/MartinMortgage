import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Layout for the original Tailwind-based campaign pages
 * (/purchase, /refinance, /ai-agent-lab, /rrar-panel, ...).
 *
 * These keep the old Montserrat/Tailwind design system and the old
 * Header/Footer. The new Martin Mortgage Group site lives in app/(mmg)
 * and has its own design system, nav and footer.
 */
export default function LegacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
