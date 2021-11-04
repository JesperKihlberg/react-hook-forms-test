import React from "react";
import FormTextField, { FormTextFieldProps } from "../../../ui/forms/controls/FormTextField";

export type PaymentFormTextProps = {
  cardName: string;
};
type PaymentFormTextKeys = keyof PaymentFormTextProps;

const TypedPaymentFormTextField: (props: FormTextFieldProps<PaymentFormTextKeys>) => JSX.Element = FormTextField;

export default TypedPaymentFormTextField;
