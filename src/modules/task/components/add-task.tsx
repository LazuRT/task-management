import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function AddTask() {
  return (
    <FieldSet className="mx-auto my-6 w-full max-w-xs">
      <FieldGroup>
        <Field orientation={"horizontal"}>
          <FieldLabel htmlFor="task">Task</FieldLabel>
          <Input id="new-task-name" type="text" placeholder="New Task" />
        </Field>
        <Field>
          <FieldLabel htmlFor="description">Description</FieldLabel>
          <Textarea
            id="new-task-description"
            placeholder="Type task description here."
          />
        </Field>
        <Field orientation={"horizontal"} className="justify-center">
          <Button type="button" variant="outline">
            Reset
          </Button>
          <Button type="submit" form="form-rhf-demo">
            Add New Task
          </Button>
        </Field>
      </FieldGroup>
    </FieldSet>
  );
}
