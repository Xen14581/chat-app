import { Button } from "@/components/ui/button";
import { MessagesSquare } from "lucide-react";

export function ProjectCard({ title }) {
  return (
    <Button variant="ghost" className="outline-none flex justify-start h-1/4 gap-1">
      <div className="col-span-1">
        <MessagesSquare />
      </div>
      <div className="col-span-2">{title}</div>
    </Button>
  );
}
