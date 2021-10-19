import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import FormContainer from "../ui/containers/FormContainer";
import Form, { FormProps } from "../ui/forms/Form";
import PaymentForm, { MyFormProps } from "../ui/forms/PaymentForm";

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}));
const MainPage: React.FC = () => {
  const classes = useStyles();

  const MyForm = (props: FormProps<MyFormProps>) => Form<MyFormProps>(props);
  return (
    <main className={classes.layout}>
      <FormContainer>
        <MyForm>
          <PaymentForm />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </MyForm>
      </FormContainer>
    </main>
  );
};

export default MainPage;
