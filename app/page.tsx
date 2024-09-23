"use client"
import { showToast } from "./Components/toastItem";


export default function Home() {
  return (
    <main>
      Hello Event
      <button onClick={()=>showToast("error","Now I've been toasted")}>Toast ME!</button>
    </main>
  );
}
