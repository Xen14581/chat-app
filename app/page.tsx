import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TypographyLarge } from "@/components/ui/typographylarge";
import { TypographyMuted } from "@/components/ui/typographymuted";
import { ProjectCard } from "../components/projectcard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Settings2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-5 overflow-hidden">
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
      <div className="bg-slate-800 w-full h-full col-span-4 flex flex-col">
        {/* Chats */}
        <div className="w-full flex-auto"></div>

        {/* Inputs */}
        <div className="w-full h-1/6 flex items-center justify-center">
          <Input
            type="text"
            placeholder="Type here"
            className="w-3/5 h-2/5 bg-background"
          />
        </div>
      </div>
    </main>
  );
}
