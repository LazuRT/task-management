import { Button } from "./components/ui/button";
import { TaskList } from "./modules/task-list/components/task-list";
import { taskLists } from "./modules/task-list/task-list.data";

export function App() {
  return (
    <div className="mx-auto max-w-lg px-4 py-8">
      <h1 className="text-3xl font-bold">Task Management</h1>

      {/* <section>
        <Button>Test Button</Button>
        <Button variant={"outline"}>Test Button</Button>
      </section> */}
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
