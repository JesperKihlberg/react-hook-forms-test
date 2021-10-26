import { Container, createTheme, Paper, PaperProps, styled, Theme } from "@mui/material";
import React from "react";

const FormPaper = styled(Paper)<PaperProps>(({ theme }: { theme: Theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),
  [theme.breakpoints.up(600 + (theme.spacing(3) as unknown as number) * 2)]: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    padding: theme.spacing(3),
  },
}));

const FormContainer: React.FC = ({ children }) => {
  return (
    <Container component="main" maxWidth="sm">
      <FormPaper elevation={3}>{children}</FormPaper>
    </Container>
  );
};

export default FormContainer;
