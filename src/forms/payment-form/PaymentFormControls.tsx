import { Typography, Grid, TextField, FormControlLabel, Checkbox } from "@mui/material";
import React from "react";
import TypedFormDatePicker, { PaymentFormDateProps } from "./controls/TypedPaymentFormDatePicker";
import TypedPaymentFormTextField, { PaymentFormTextProps } from "./controls/TypedPaymentFormTextField";

export type PaymentFormProps = PaymentFormTextProps &
  PaymentFormDateProps & {
    cardNumber: number;
  };

// type FormPropKeys = keyof MyFormProps; // "cardName"| "cardNumber";

export default function PaymentFormControls() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TypedPaymentFormTextField
            fieldName="cardName"
            fieldOptions={{
              required: "You need it",
              maxLength: { value: 20, message: "Too long" },
              validate: (value: string) => value.startsWith("J") || "Must start with J",
            }}
            label="Card name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField id="cardNumber" label="Card number" fullWidth autoComplete="cc-number" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TypedFormDatePicker
            initialValue={new Date("01-01-2022")}
            fieldName="cardExpiryDate"
            fieldOptions={{
              required: "You need it",
            }}
            label="Card expiry date"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField id="cvv" label="CVV" helperText="Last three digits on signature strip" fullWidth autoComplete="cc-csc" />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TypedFormDatePicker
            initialValue={new Date("01-01-2022")}
            fieldName="cardStartDate"
            fieldOptions={{
              required: "You need it",
            }}
            label="Card start date"
          />
        </Grid>
      </Grid>
    </>
  );
}
