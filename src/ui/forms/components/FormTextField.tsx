import React from "react";
import { TextField, TextFieldStylingProps } from "../../components/TextField/TextField";
import { BaseFormFieldProps } from "./FieldOptions";

import { connectToForm } from "./FormFieldWrapper";

export type FormTextFieldProps<TFieldName extends string> = BaseFormFieldProps<TFieldName, string> & TextFieldStylingProps;

const FormTextField: <TFieldName extends string>(props: FormTextFieldProps<TFieldName>) => JSX.Element = connectToForm(TextField);

export default FormTextField;
