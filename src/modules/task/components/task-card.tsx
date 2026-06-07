import type { Task } from "../task.type";

export function TaskCard({ task }: { task: Task }) {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>{task.isDone ? "Done" : "Not Done"}</p>
    </div>
  );
}
