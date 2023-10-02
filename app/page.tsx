import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TypographyLarge } from "@/components/ui/typographylarge";
import { ProjectCard } from "../components/projectcard";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-5">
      {/* Projects Sidebar */}
      <div className="bg-slate-900 w-full h-full col-span-1 p-4 flex flex-col">
        <Button variant="outline" className="w-full">
          New Project
        </Button>
        <div className="flex-auto py-3">
          <TypographyLarge>Projects</TypographyLarge>
          <div className="grid grid-cols-1 gap-0 py-2">
            <ScrollArea className="h-screen">
              {[1, 2, 3, 4, 5].map((el) => (
                <ProjectCard key={el} title={`Project ${el}`} />
              ))}
            </ScrollArea>
          </div>
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
