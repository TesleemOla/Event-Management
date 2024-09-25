"use client"
import { Heading } from "./Components";
import Image from "next/image"


export default function Home() {
  return (
    <main className="bg-transparent text-center">
      <section>
        <Heading   heading="Welcome to Planner" />
        <p className="font-medium">A multipurpose event management system that saves details about tasks and dates for easy time management</p>
      </section>
      <section className="w-full h-1/2 mx-auto flex">
        <Image src="/images/niche-wedding.jpg" alt="home description" width={1000} height={600} />
        <p>
         Events Today
        </p>
      </section>
    </main>
  );
}
