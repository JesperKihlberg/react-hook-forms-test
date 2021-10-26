import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
import ConnectForm from "../form/ConnectForm";
import { BaseFormFieldProps } from "./FieldOptions";

export type FormTextFieldProps<TFieldName extends string, TFieldValues> = BaseFormFieldProps<TFieldName, TFieldValues> &
  Pick<TextFieldProps, "id" | "fullWidth" | "label" | "required" | "autoFocus" | "autoComplete" | "inputProps" | "className">;

function FormTextField<TFieldName extends string, TFieldValues>(props: FormTextFieldProps<TFieldName, TFieldValues>) {
  const { fieldName, fieldOptions, ...rest } = props;
  return (
    <ConnectForm>
      {({ register, formState }) => {
        const fieldError = formState.errors[fieldName];
        return (
          <TextField
            {...register(fieldName, fieldOptions)}
            {...rest}
            helperText={fieldError && formState.errors[fieldName].message}
            error={!!fieldError}
          />
        );
      }}
    </ConnectForm>
  );
}

export default FormTextField;
