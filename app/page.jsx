import Image from "next/image";

export default function Home() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Welcome</h1>
      <p className="mt-4">
        This is a simple Next.js + Tailwind setup (JSX, no TypeScript).
      </p>
    </section>
  );
}
