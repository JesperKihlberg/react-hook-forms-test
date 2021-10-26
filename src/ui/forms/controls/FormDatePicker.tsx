import { DesktopDatePicker, DesktopDatePickerProps, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { TextField } from "@mui/material";
import React from "react";
import ConnectForm from "../form/ConnectForm";
import { BaseFormFieldProps } from "./FieldOptions";

export type FormDatePickerProps<TFieldName extends string, Date> = BaseFormFieldProps<TFieldName, Date> &
  Pick<DesktopDatePickerProps, "label" | "autoFocus" | "className">;

function FormDatePicker<TFieldName extends string, Date>(props: FormDatePickerProps<TFieldName, Date>) {
  const { fieldName, fieldOptions, ...rest } = props;
  return (
    <ConnectForm>
      {({ register, formState }) => {
        const fieldError = formState.errors[fieldName];
        return (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              value={""}
              {...(register(fieldName, fieldOptions) as unknown as Pick<DesktopDatePickerProps, "onChange">)}
              {...rest}
              label="Date desktop"
              inputFormat="dd/MM/yyyy"
              renderInput={(params) => (
                <TextField {...params} helperText={fieldError && formState.errors[fieldName].message} error={!!fieldError} />
              )}
            />
          </LocalizationProvider>
        );
      }}
    </ConnectForm>
  );
}

export default FormDatePicker;

export {};
