import { Button } from "./components/ui/button";
import { TaskList } from "./modules/task-list/components/task-list";
import { taskLists } from "./modules/task-list/task-list.data";

export function App() {
  return (
    <div>
      <h1 className="text-5xl font-bold">Task Management</h1>

      <section>
        <Button>Test Button</Button>
        <Button variant={"outline"}>Test Button</Button>
      </section>

      {taskLists.map((list) => (
        <TaskList key={list.id} list={list} />
      ))}
    </div>
  );
}
