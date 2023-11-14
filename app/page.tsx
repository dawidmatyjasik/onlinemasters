"use client";
import { Navigation } from "@/components/navigation/Navigation";
import { NavigationProvider } from "@/context/NavigationProvider";

export default function Home() {
  return (
    <main className="bg-red-100 h-[300vh]">
      <NavigationProvider>
        <Navigation />
      </NavigationProvider>
    </main>
  );
}
