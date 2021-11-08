import { DesktopDatePicker, DesktopDatePickerProps, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { TextField } from "@mui/material";
import React, { useEffect } from "react";
import { FieldValues, FormState, UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";
import ConnectForm from "../form/ConnectForm";
import { BaseFormFieldProps } from "./FieldOptions";

export type FormDatePickerProps<TFieldName extends string, Date> = BaseFormFieldProps<TFieldName, Date> &
  Pick<DesktopDatePickerProps, "label" | "autoFocus" | "className"> & { initialValue: Date };

function FormDatePicker<TFieldName extends string>(props: FormDatePickerProps<TFieldName, Date>) {
  const { fieldName, fieldOptions, initialValue, ...rest } = props;

  return (
    <ConnectForm>
      {({ register, formState, setValue, watch }) => {
        return (
          <InnerDatePicker
            register={register as unknown as UseFormRegister<FieldValues>}
            fieldName={fieldName}
            fieldOptions={fieldOptions}
            formState={formState}
            setValue={setValue}
            watch={watch}
            initialValue={initialValue}
            rest={rest}
          />
        );
      }}
    </ConnectForm>
  );
}

export default FormDatePicker;

interface InnerDatePickerProps {
  register: any;
  fieldName: string;
  fieldOptions: any;
  rest: { label?: React.ReactNode; autoFocus?: boolean | undefined; className?: string | undefined };
  formState: FormState<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  initialValue: Date;
}
function InnerDatePicker({ register, fieldName, fieldOptions, rest, formState, setValue, watch, initialValue }: InnerDatePickerProps) {
  const dateValue = watch(fieldName, initialValue);

  useEffect(() => {
    register(fieldName, fieldOptions);
  }, [register]);
  useEffect(() => {
    setValue(fieldName, initialValue);
  }, []);

  const fieldError = formState.errors[fieldName];
  const handleChange = (e: any) => {
    setValue(fieldName, e);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        value={dateValue}
        onChange={handleChange}
        {...{ ...rest, defaultValue: null }}
        inputFormat="dd/MM/yyyy"
        renderInput={(params) => {
          return <TextField {...params} type="date" helperText={fieldError && fieldError.message} error={!!fieldError} />;
        }}
      />
    </LocalizationProvider>
  );
}
