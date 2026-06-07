import { TaskCard } from "../../task/components/task-card";
import type { TaskList } from "../tasklist.type";

export function TaskList({ list }: { list: TaskList }) {
  return (
    <div>
      <h2>{list.title} List</h2>

      {list.tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
