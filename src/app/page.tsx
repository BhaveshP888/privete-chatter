"use client";

import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

const STORAGE_KEY: string = "chat_username";

const animals: string[] = [
  "eagle",
  "lion",
  "panther",
  "shark",
  "dolphin",
  "octopus",
];

const generateUsername = () => {
  const animal = animals[Math.floor(Math.random() * animals.length)];
  return `anonymous-${animal}-${nanoid(5)}`;
};

export default function Home() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // This code now runs only on the client-side
    let storedUserName = localStorage.getItem(STORAGE_KEY);
    if (storedUserName) {
      setUserName(storedUserName);
    } else {
      const newUserName = generateUsername();
      localStorage.setItem(STORAGE_KEY, newUserName);
      setUserName(newUserName );
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-lime-500">
            {">"}privete_chatter
          </h1>
        </div>
        <div className="border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-md">
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="flex items-center text-zinc-500 ">
                Your ID
              </label>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-zinc-950 border border-zinc-800 p-3 text-sm text-zinc-400 font-mono">
                  {userName}
                </div>
              </div>
            </div>
            <button className="w-full bg-zinc-100 text-black p-3 font-bold text-sm hover:bg-zinc-50 hover:text-black transition-colors mt-2 cursor-pointer disabled:opacity-50">
              Create Secure Room
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
