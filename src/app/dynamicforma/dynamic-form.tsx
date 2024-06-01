import { fields } from "./data";
import { Form } from "./Form";

export default function DynamicForm() {
  return (
    <div className="App">
      <h1>Dynamic form</h1>
      <Form fields={fields} />
    </div>
  );
}
