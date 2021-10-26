import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

export interface FormProps {
  children: React.ReactNode;
}

function Form<TFormProps>({ children }: FormProps) {
  const methods = useForm<TFormProps>();

  const onSubmit: SubmitHandler<TFormProps> = (data) => console.log("Hej", data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

export default Form;
