export type FormFieldProps = {
  helperText?: React.ReactNode;
  error?: boolean | undefined;
  onChange: (event: { target: unknown; type?: unknown }) => Promise<void | boolean>;
  onBlur: (event: { target: unknown; type?: unknown }) => Promise<void | boolean>;
  innerRef: (instance: unknown) => void;
  name: string;
};
