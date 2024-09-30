import prisma from '@/lib/db';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import EventsMap from './Components/EventsMap';


export default async function Home() {

  const today =new Date()
  const mydate = `${today.getFullYear()}-
  ${today.getMonth()+1 < 10? `0${today.getMonth()+1}`:
     today.getMonth()}-${today.getDate()}`
 
  const events = await prisma.event.findMany({
    where: { eventDate: mydate }
  })
 

  return (
    <main className="bg-gray-100 text-center p-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-blue-600">Planner</h1>
        <p className="text-lg text-gray-700 mt-2">A multipurpose event management system that saves details about tasks and dates for easy time management</p>
      </header>
      <section className="mb-8">
        {
          events.length === 0?
        <p className="text-4xl font-bold">No Events Today</p>:

          <Link href={`/Events/${mydate}`} className="text-2xl bg-red-400 rounded-full p-2 text-white font-bold">
        Events Today</Link>
}
        <p className="text-gray-700 mt-2">
          Stay updated about your daily events and never miss them
        </p>
     
       <EventsMap allEvents={events} />
      </section>
      <section className="mb-8">
        <Image
          src="/images/niche-wedding.jpg"
          alt="Event banner"
          width={1200}
          height={600}
          className="rounded-lg shadow-lg mx-auto"
        />
      </section>
      
      
      <footer className="mt-8">
        <p className="text-gray-600">© 2024 Planner Event Management. All rights reserved.</p>
      </footer>
    </main>
  );
};



