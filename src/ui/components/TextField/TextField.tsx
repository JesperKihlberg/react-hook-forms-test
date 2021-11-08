import React from "react";
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from "@mui/material";
import { FormFieldProps } from "../FormFieldProps";

export type TextFieldStylingProps = Pick<
  MuiTextFieldProps,
  "id" | "fullWidth" | "label" | "required" | "autoFocus" | "autoComplete" | "inputProps" | "className"
>;
type TextFieldProps = TextFieldStylingProps & FormFieldProps;

export function TextField(props: TextFieldProps) {
  const { innerRef, ...rest } = props;
  return <MuiTextField {...rest} ref={innerRef} />;
}
