export function TaskItem() {
  const title = "Work 1";
  const description = "Submit Document";
  const isDone = false;

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{isDone ? "Done" : "Not Done"}</p>
    </div>
  );
}
