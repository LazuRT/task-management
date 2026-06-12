import { TaskCard } from "../../task/components/task-card";
import type { TaskList } from "../task-list.type";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AddTask } from "@/modules/task/components/add-task";

export function TaskList({ list }: { list: TaskList }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{list.title} List</CardTitle>
      </CardHeader>

      <CardContent>
        <ul className="flex flex-col gap-2">
          {list.tasks.map((task) => (
            <li>
              <TaskCard key={task.id} task={task} />
            </li>
          ))}
        </ul>

        <AddTask />
      </CardContent>
    </Card>
  );
}
