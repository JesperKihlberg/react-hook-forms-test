import { IconButton, Grid } from "@mui/material";
import React from "react";

interface DrinkSelectorProps {}
const DrinkSelector: React.FC<DrinkSelectorProps> = () => {
  return (
    // a 4 by 4 grid  containing a button for each drink
    <>
      {[...Array(4)].map((_, i) => (
        <Grid item container xs={3} key={i}>
          {[...Array(4)].map((_, j) => (
            <Grid item xs={3} key={j} style={{ border: "1px solid blue", width: "40px" }}>
              <IconButton>{`${i}${j}`}</IconButton>
            </Grid>
          ))}
        </Grid>
      ))}
    </>
  );
};

export default DrinkSelector;
