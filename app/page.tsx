"use client";
import Goals from "@/components/Goals";
import { Hero } from "@/components/Hero";
import Hours from "@/components/Hours";
import Schedule from "@/components/Schedule";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const goalsRef = useRef<HTMLDivElement | null>(null);
  const scheduleRef = useRef<HTMLDivElement | null>(null);
  const hoursRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="bg-lesptit-primary">
      <div id="hero" ref={heroRef}>
        <Hero />
      </div>
      <div className="flex flex-col gap-10 p-5">
        <div id="goals" className="" ref={goalsRef}>
          <Goals />
        </div>
        <div id="schedule" className="" ref={scheduleRef}>
          <Schedule />
        </div>
        <div id="hours" ref={hoursRef} className="">
          <Hours />
        </div>
      </div>
    </div>
  );
}
