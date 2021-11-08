import React from "react";
import { DesktopDatePicker, DesktopDatePickerProps, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { TextField } from "@mui/material";
import { FormFieldProps } from "../FormFieldProps";

export type DatePickerStylingProps = { initialValue: Date } & Pick<DesktopDatePickerProps, "label" | "autoFocus" | "className">;

type DatePickerProps = DatePickerStylingProps &
  Omit<FormFieldProps, "onChange"> & { value: Date; onChange?: (date: Date | null, keyboardInputValue?: string | undefined) => void };

const DatePicker: React.FC<DatePickerProps> = (props) => {
  const { label, autoFocus, className, value, onChange, ...rest } = props;
  const handleChange = onChange || ((_: Date | null) => {});
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        value={value}
        onChange={handleChange}
        {...{ ...rest, defaultValue: null }}
        inputFormat="dd/MM/yyyy"
        renderInput={(params) => {
          return <TextField {...params} type="date" />;
        }}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
