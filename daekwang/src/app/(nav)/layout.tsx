import { Navbar, Footer } from "@/components";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <section className="min-h-screen flex flex-col">
        <Navbar />
        {children}
      </section>
      <Footer />
    </div>
  );
}
