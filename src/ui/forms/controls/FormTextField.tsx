import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import ConnectForm from "../form/ConnectForm";
import { BaseFormFieldProps, FieldOptions } from "./FieldOptions";
import { FieldValues, UseFormRegister, UseFormReturn } from "react-hook-form";

export type FormTextFieldProps<TFieldValues> = BaseFormFieldProps<string, TFieldValues> &
  Pick<TextFieldProps, "id" | "fullWidth" | "label" | "required" | "autoFocus" | "autoComplete" | "inputProps" | "className">;

export function FormTextField<TFieldValues>(props: FormTextFieldProps<TFieldValues>) {
  const { fieldName, fieldOptions, ...rest } = props;
  return (
    <ConnectForm>
      {({ register, formState }) => {
        const fieldError = formState?.errors[fieldName];
        return <InnerFormTextField {...{ fieldName, register, fieldError, fieldOptions, rest }} />;
      }}
    </ConnectForm>
  );
}

interface InnerFormTextFieldProps<TFieldValues> extends FormTextFieldProps<TFieldValues> {
  register: UseFormRegister<FieldValues>;
  fieldError?: { message: string | JSX.Element };
}

export function InnerFormTextField<TFieldValues>(props: InnerFormTextFieldProps<TFieldValues>) {
  const { fieldName, register, fieldError, fieldOptions, ...rest } = props;
  return <TextField {...register(fieldName, fieldOptions)} {...rest} helperText={fieldError && fieldError.message} error={!!fieldError} />;
}

export default FormTextField;
