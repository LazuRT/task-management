import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Task } from "../task.type";

export function TaskCard({ task }: { task: Task }) {
  return (
    <Card size="sm">
      <CardHeader>
        <CardTitle>
          <span>{task.isDone ? "✅" : "❌"} </span>
          {task.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <p>{task.description}</p>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
