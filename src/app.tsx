import { TaskItem } from "./task-card";
type Task = {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
};

const tasks: Task[] = [
  {
    id: 1,
    title: "Buy groceries",
    description: "Milk, eggs, bread, and fruits",
    isDone: false,
  },
  {
    id: 2,
    title: "Clean the kitchen",
    description: "Wash dishes and wipe the counters",
    isDone: true,
  },
  {
    id: 3,
    title: "Morning workout",
    description: "30 minutes of jogging and stretching",
    isDone: false,
  },
  {
    id: 4,
    title: "Reply to emails",
    description: "Respond to pending work messages",
    isDone: true,
  },
  {
    id: 5,
    title: "Read a book",
    description: "Finish two chapters of current novel",
    isDone: false,
  },
];
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
