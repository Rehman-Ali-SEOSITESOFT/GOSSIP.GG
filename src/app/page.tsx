"use client";

import LiveMatch from "@/components/liveMatches";
import EsportEvent from "@/components/esportEvents";



export default function Home() {
 
  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <EsportEvent/>
    <LiveMatch/>
    </>
  )
}
