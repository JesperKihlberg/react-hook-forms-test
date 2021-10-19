import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export interface FormProps<P> {
  children: React.ReactNode;
}
function Form<P>({ children }: FormProps<P>) {
  const { handleSubmit } = useForm<P>();
  const onSubmit: SubmitHandler<P> = (data) => console.log("Hej", data);

  return <form onSubmit={handleSubmit(onSubmit)}>{children}</form>;
}

export default Form;
