import FormDatePicker, { FormDatePickerProps } from "../../../ui/forms/controls/FormDatePicker";

export type PaymentFormDateProps = {
  cardExpiryDate: string;
};
type PaymentFormTextKeys = keyof PaymentFormDateProps;

const TypedFormDatePicker: <TFieldValues>(props: FormDatePickerProps<PaymentFormTextKeys, TFieldValues>) => JSX.Element = FormDatePicker;

export default TypedFormDatePicker;
