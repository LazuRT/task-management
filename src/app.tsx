import { TaskLists } from "./modules/list/components/task-lists";
import { taskLists } from "./modules/list/tasklist.data";

export function App() {
  return (
    <div>
      <h1>Task Management</h1>

      {taskLists.map((list) => (
        <TaskLists key={list.id} list={list} />
      ))}
    </div>
  );
}
