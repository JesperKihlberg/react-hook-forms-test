import FormTextField, { FormTextFieldProps } from "../../../ui/forms/controls/FormTextField";

export type PaymentFormTextProps = {
  cardName: string;
};
type PaymentFormTextKeys = keyof PaymentFormTextProps;

const TypedPaymentFormTextField: <TFieldValues>(props: FormTextFieldProps<PaymentFormTextKeys, TFieldValues>) => JSX.Element =
  FormTextField;

export default TypedPaymentFormTextField;
