import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import ConnectForm from "./ConnectForm";

export type MyFormProps = {
  cardName: string;
  cardNumber: string;
};

type FormPropKeys = keyof MyFormProps; // "cardName"| "cardNumber";

type FormFieldData = {
  [key in FormPropKeys]: { label: string };
};
export default function PaymentForm() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          {newFunction()}
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField id="cardNumber" label="Card number" fullWidth autoComplete="cc-number" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" />
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
      </Grid>
    </>
  );
}
function newFunction() {
  return (
    <ConnectForm>
      {({ register, formState }) => {
        const cardnameError = !!formState.errors["cardName"];
        return (
          <TextField
            {...register("cardName", { required: "You need it", maxLength: { value: 20, message: "Too long" } })}
            // id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            helperText={cardnameError && formState.errors["cardName"].message}
            error={cardnameError}
          />
        );
      }}
    </ConnectForm>
  );
}
