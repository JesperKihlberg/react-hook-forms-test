import { FieldPath, FieldValues, RegisterOptions, UseFormSetValue, UseFormWatch } from "react-hook-form";

export type FieldOptions<TFieldValues> = RegisterOptions<TFieldValues, FieldPath<TFieldValues>> | undefined;

export interface BaseFormFieldProps<TFieldName extends string, TFieldValues> {
  fieldName: TFieldName;
  fieldOptions?: FieldOptions<TFieldValues>;
}

export {};
