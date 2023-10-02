"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { TypographyLarge } from "@/components/ui/typographylarge";
import { TypographyMuted } from "@/components/ui/typographymuted";
import { ProjectCard } from "../components/projectcard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Settings2, SendHorizontal, FileText } from "lucide-react";

import { useState, useEffect } from "react";

export default function Home() {
  const [state, setState] = useState({ text: "" });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState({ ...state, text: e.target.value });
  };

  return (
    <main className="h-screen grid grid-cols-5 overflow-hidden">
      {/* Projects Sidebar */}
      <div className="bg-slate-900 w-full h-screen col-span-1 p-4 flex flex-col">
        <Button variant="outline" className="w-full">
          New Project
        </Button>
        <div className="py-3 h-[85%] mb-4">
          <TypographyLarge>Projects</TypographyLarge>

          <ScrollArea className="h-full">
            <div className="grid grid-cols-1 gap-0 py-2">
              {[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20,
              ].map((el) => (
                <ProjectCard key={el} title={`Project ${el}`} />
              ))}
            </div>
          </ScrollArea>
        </div>
        <div className="flex flex-auto justify-between place-items-center">
          <div className="pt-2">
            <TypographyMuted>Logged in as:</TypographyMuted>
            <TypographyLarge>Anonymous</TypographyLarge>
          </div>
          <Button variant="ghost">
            <Settings2 />
          </Button>
        </div>
      </div>

      {/* Chat window */}
      <div className="bg-slate-800 w-full h-screen col-span-4 flex flex-col">
        {/* Navbar */}
        <div className="w-full h-[8%] bg-transparent"></div>

        {/* Chats */}
        <div className="w-full h-[77%] px-48">
            
        </div>

        {/* Inputs */}
        <div className="w-full h-[15%] flex items-center justify-between px-48">
          <FileText />
          <Textarea
            placeholder="Type here"
            rows={
              Math.floor(state.text.length / 75) + 1 < 3
                ? Math.floor(state.text.length / 75) + 1
                : 3
            }
            className="w-5/6 min-h-1/5 bg-background resize-none"
            onChange={onChange}
          />
          <SendHorizontal />
        </div>
      </div>
    </main>
  );
}
