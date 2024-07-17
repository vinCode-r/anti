import Image from "next/image";
import Hero from "./components/Hero";
import How from "./components/How";
import Features from "./components/Features";

export default function Home() {
  return (
    <main className="min-h-screen w-full background py-4 flex flex-col items-center ">
      <Hero />
      <How />
      <Features />
    </main>
  );
}
