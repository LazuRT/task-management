import { tasks } from "./modules/task/task.data";
import { TaskItem } from "./modules/task/components/task-card";

export function App() {
  return (
    <div>
      <h1>Task Management</h1>
      {tasks.map((task) => (
        <TaskItem task={task} />
      ))}
    </div>
  );
}
