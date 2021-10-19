import { Container, makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}));

const FormContainer: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} className={classes.paper}>
        {children}
      </Paper>
    </Container>
  );
};

export default FormContainer;
