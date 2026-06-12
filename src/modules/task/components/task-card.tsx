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
        <CardTitle>{task.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <p>{task.description}</p>
        </CardDescription>
        <p>{task.isDone ? "Done" : "Not Done"}</p>
      </CardContent>
    </Card>
  );
}
