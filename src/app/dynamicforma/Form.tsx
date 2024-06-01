import { FormProvider, useForm } from "react-hook-form";
import { DynamicControl } from "./DynamicControl";
import { DynamicFieldData } from "./dynamic-control-types";

interface FormProps {
  fields: DynamicFieldData[];
}

export const Form = ({ fields }: FormProps) => {
  const formMethods = useForm();

  return (
    <form onSubmit={formMethods.handleSubmit((data) => console.log(data))}>
      <FormProvider {...formMethods}>
        {fields.map((d, i) => (
          <div key={i}>
            <span className="font-bold">{d.label}</span>
            <DynamicControl {...d} />
          </div>
        ))}
      </FormProvider>
      <button type="submit">Submit</button>
    </form>
  );
};
