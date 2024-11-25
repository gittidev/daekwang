import { Navbar } from "@/components";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </section>
      <main className="flex-grow">{children}</main>
    </>
  );
}
