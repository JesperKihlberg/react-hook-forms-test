import { FieldValues, useFormContext, UseFormReturn } from "react-hook-form";

import React from "react";

interface ConnectFormProps {
  children: (methods: UseFormReturn<FieldValues, object>) => React.ReactNode;
}
const ConnectForm = ({ children }: ConnectFormProps): JSX.Element => {
  const methods = useFormContext();

  return <>{children({ ...methods }) || null}</>;
};

export default ConnectForm;
