import type { Task } from "../task/task.type";

export type TaskList = {
  id: number;
  title: string;
  tasks: Task[];
};
