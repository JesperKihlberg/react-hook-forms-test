import React from "react";
import FormContainer from "../ui/containers/FormContainer";
import Form, { FormProps } from "../ui/forms/form/Form";
import PaymentFormControls, { PaymentFormProps } from "../forms/payment-form/PaymentFormControls";
import { Button, Theme } from "@mui/material";

const TypedForm: (props: FormProps) => JSX.Element = (props) => Form<PaymentFormProps>(props);
const MainPage: React.FC = () => {
  return (
    <main>
      <FormContainer>
        <TypedForm>
          <PaymentFormControls />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </TypedForm>
      </FormContainer>
    </main>
  );
};

export default MainPage;
