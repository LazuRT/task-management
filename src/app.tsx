import { TaskList } from "./modules/task-list/components/task-list";
import { taskLists } from "./modules/task-list/task-list.data";

export function App() {
  return (
    <div>
      <h1 className="text-5xl font-bold">Task Management</h1>

      {taskLists.map((list) => (
        <TaskList key={list.id} list={list} />
      ))}
    </div>
  );
}
