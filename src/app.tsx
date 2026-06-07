import { TaskList } from "./modules/list/components/task-list";
import { taskLists } from "./modules/list/tasklist.data";

export function App() {
  return (
    <div>
      <h1>Task Management</h1>

      {taskLists.map((list) => (
        <TaskList key={list.id} list={list} />
      ))}
    </div>
  );
}
