import { TaskItem } from "../../task/components/task-card";
import type { TaskList } from "../tasklist.type";

export function TaskLists({ list }: { list: TaskList }) {
  return (
    <div>
      <h2>{list.title} List</h2>

      {list.tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
