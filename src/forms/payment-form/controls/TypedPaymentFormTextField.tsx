import React from "react";
import FormTextField, { FormTextFieldProps } from "../../../ui/forms/components/FormTextField";

export type PaymentFormTextProps = {
  cardName: string;
};
type PaymentFormTextKeys = keyof PaymentFormTextProps;

const PaymentFormTextField: (props: FormTextFieldProps<PaymentFormTextKeys>) => JSX.Element = FormTextField;

export default PaymentFormTextField;
