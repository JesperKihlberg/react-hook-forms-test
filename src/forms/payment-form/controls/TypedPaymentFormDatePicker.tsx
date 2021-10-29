import FormDatePicker, { FormDatePickerProps } from "../../../ui/forms/controls/FormDatePicker";

export type PaymentFormDateProps = {
  cardExpiryDate: string;
  cardStartDate: string;
};
type PaymentFormTextKeys = keyof PaymentFormDateProps;

const TypedFormDatePicker: (props: FormDatePickerProps<PaymentFormTextKeys, Date>) => JSX.Element = FormDatePicker;

export default TypedFormDatePicker;
