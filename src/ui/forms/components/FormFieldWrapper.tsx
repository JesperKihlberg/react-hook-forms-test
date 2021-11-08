import React from "react";
import { FormFieldProps } from "../../components/FormFieldProps";
import ConnectForm from "../form/ConnectForm";
import { BaseFormFieldProps } from "./FieldOptions";

export function connectToForm<TFieldName extends string, TFieldValues, TFieldSTylingProps>(
  WrappedComponent: (props: FormFieldProps) => JSX.Element
) {
  function FormTextField(props: BaseFormFieldProps<TFieldName, TFieldValues> & TFieldSTylingProps) {
    const { fieldName, fieldOptions, ...rest } = props;
    return (
      <ConnectForm>
        {({ register, formState }) => {
          const fieldError = formState?.errors[fieldName];
          const { ref, ...restRegister } = register(fieldName, fieldOptions);
          return (
            <WrappedComponent
              {...restRegister}
              innerRef={ref}
              helperText={fieldError && fieldError.message}
              error={!!fieldError}
              {...rest}
            />
          );
        }}
      </ConnectForm>
    );
  }
  return FormTextField;
}
