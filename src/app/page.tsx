import Image from "next/image";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-10 flex-1">
        <h1 className="text-2xl font-bold">Welcome</h1>
        <p className="mt-4 text-muted-foreground">Simple navbar demo page.</p>
      </main>
      <Footer />
    </div>
  );
}
