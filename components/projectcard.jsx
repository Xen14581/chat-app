import { Button } from "@/components/ui/button";
import { MessagesSquare } from "lucide-react";

export function ProjectCard({ title }) {
  return (
    <Button
      variant="ghost"
      className="outline-none flex justify-start h-1/4 gap-2"
    >
      <div>
        <MessagesSquare className="mr-3" />
      </div>
      <div>{title}</div>
    </Button>
  );
}
