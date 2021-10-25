import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { MyFormProps } from "./PaymentForm";

export interface FormProps {
  children: React.ReactNode;
}
function Form({ children }: FormProps) {
  const methods = useForm<MyFormProps>();

  const onSubmit: SubmitHandler<MyFormProps> = (data) => console.log("Hej", data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

export default Form;
