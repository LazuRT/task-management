import type { TaskLists } from "./task-list.type";

export const taskLists: TaskLists = [
  {
    id: 1,
    title: "Personal",
    tasks: [
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
    ],
  },
  {
    id: 2,
    title: "Work",
    tasks: [
      {
        id: 1,
        title: "Reply to emails",
        description: "Respond to client messages",
        isDone: true,
      },
      {
        id: 2,
        title: "Fix bug",
        description: "Resolve error on login page",
        isDone: false,
      },
      {
        id: 3,
        title: "Team meeting",
        description: "Attend weekly sync meeting",
        isDone: true,
      },
    ],
  },
];
