import React from "react";
import FormDatePicker, { FormDatePickerProps } from "../../../ui/forms/components/FormDatePicker";

export type PaymentFormDateProps = {
  cardExpiryDate: string;
  cardStartDate: string;
};
type PaymentFormDateKeys = keyof PaymentFormDateProps;

const TypedFormDatePicker: (props: FormDatePickerProps<PaymentFormDateKeys, Date>) => JSX.Element = FormDatePicker;

export default TypedFormDatePicker;
