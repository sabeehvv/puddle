import React, { useState } from "react";
import { Container, Grid, Paper } from "@mui/material";
import { AddButton, SubButton, DoneButton } from "./Buttons";
import "./puddle.css";
import imagesss from "../../images/chicken1.png"

const OvalButton1 = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Grid className="egg-container iconButton">
      <SubButton handleDecrease={handleDecrease} />
      <img src={imagesss} />
      {/* <span style={{ fontSize: "18px" }}>{count} dfgdsfgdf dfs</span> */}
      <DoneButton/>
      <AddButton handleIncrease={handleIncrease} />
    </Grid>
  );
};

const OvalButtonsPage = () => {
  return (<>
    <Container
      maxWidth="lg"
      style={{
        marginBottom: "30px",
        paddingTop: "220px",
        backgroundColor: "#000623",
      }}
    >
      <Grid container>
        <OvalButton1 />
      </Grid>
    

    </Container>
    <div class="image-with-border"></div>
    </>
  );
};

export default OvalButtonsPage;
