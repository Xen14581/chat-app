"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { TypographyLarge } from "@/components/ui/typographylarge";
import { TypographyMuted } from "@/components/ui/typographymuted";
import { ProjectCard } from "../components/projectCard";
import { ScrollArea } from "@/components/ui/scroll-area";

import { cn } from "@/lib/utils";

import { Settings2, SendHorizontal, FileText, PanelLeft } from "lucide-react";

import { useState, useEffect } from "react";

import Message from "../components/message";
import { ModeToggle } from "../components/changeTheme";

interface colors {
  true: string;
  false: string;
}

const colors = {
  true: "bg-slate-700",
  false: "bg-slate-800",
};

export default function Home() {
  const [state, setState] = useState({
    text: "",
    projects: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
    messages: [
      { user: "true", message: "Hello" },
      { user: "false", message: "Hello" },
      { user: "true", message: "Hello" },
      { user: "false", message: "Hello" },
      { user: "true", message: "Hello" },
      { user: "false", message: "Hello" },
      { user: "true", message: "Hello" },
      { user: "false", message: "Hello" },
      { user: "true", message: "Hello" },
      { user: "false", message: "Hello" },
      { user: "true", message: "Hello" },
      { user: "false", message: "Hello" },
    ],
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState({ ...state, text: e.target.value });
  };

  return (
    <main className="h-screen grid grid-cols-5 overflow-hidden">
      {/* Projects Sidebar */}
      <div className="bg-slate-900 w-full h-screen col-span-1 p-4 flex flex-col">
        {/* New Project Button */}
        <Button variant="outline" className="w-full">
          New Project
        </Button>

        {/* All Projects Scroll Section */}
        <div className="py-3 h-[85%] mb-4">
          <TypographyLarge>Projects</TypographyLarge>

          <ScrollArea className="h-full">
            <div className="grid grid-cols-1 gap-0 py-2">
              {state.projects.map((el) => (
                <ProjectCard key={el} title={`Project ${el}`} />
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* User details section */}
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
        <header className="sticky w-full h-[8%] bg-transparent z-10 flex justify-between items-center p-8">
          <PanelLeft />
          <TypographyLarge>Project Name</TypographyLarge>
          <ModeToggle
            className={{
              sun: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
              moon: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
            }}
          />
        </header>

        {/* Chats */}
        <div className="w-full h-[77%]">
          <ScrollArea className="h-full">
            {state.messages.map((e, idx) => (
              <Message
                key={idx}
                user={e.user}
                text={e.message}
                className={cn(
                  colors[e.user as keyof typeof colors],
                  "w-full px-48 py-8"
                )}
              />
            ))}
          </ScrollArea>
        </div>

        {/* Inputs */}
        <div className="w-full h-[15%] flex items-center justify-between px-48">
          <FileText />
          <Textarea
            spellCheck
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
