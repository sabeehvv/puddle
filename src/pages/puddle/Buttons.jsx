import React, { useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CheckIcon from "@mui/icons-material/Check";

export const AddButton = ({ handleIncrease }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleIncrease}
      style={{
        borderRadius: "36% 64% 63% 37% / 36% 45% 55% 64%",
        minWidth: "34px",
        minHeight: "33px",
        padding: "0",
        margin: "0",
      }}
    >
      <AddIcon />
    </Button>
  );
};

export const SubButton = ({ handleDecrease }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleDecrease}
      style={{
        borderRadius: "36% 64% 63% 37% / 36% 45% 55% 64%",
        minWidth: "34px",
        minHeight: "33px",
        padding: "0",
        margin: "0",
        paddingRight: "5px",
      }}
    >
      <RemoveIcon />
    </Button>
  );
};

export const DoneButton = ({ handleDone }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleDone}
      style={{
        borderRadius: "36% 64% 63% 37% / 36% 45% 55% 64%",
        minWidth: "40px",
        minHeight: "43px",
        padding: "0",
        margin: "0",
        alignSelf: "self-start",
      }}
    >
      <CheckIcon />
    </Button>
  );
};
