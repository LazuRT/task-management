import { TaskList } from "./modules/task-list/components/task-list";
import { taskLists } from "./modules/task-list/task-list.data";
import { AddList } from "./modules/task-list/components/add-list";

export function App() {
  return (
    <div className="mx-auto max-w-xl px-4 py-8">
      <h1 className="text-center text-3xl font-bold">Task Management</h1>

      <AddList />

      <ul className="flex flex-col gap-4 p-4">
        {taskLists.map((list) => (
          <li>
            <TaskList key={list.id} list={list} />
          </li>
        ))}
      </ul>
    </div>
  );
}
