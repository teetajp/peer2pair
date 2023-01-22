import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import * as React from "react";

const Item = (props) => {
  return (
    <Button
      href={props.link}
      variant="contained"
      sx={{
        width: "100%",
        height: "70px",
        margin: "0px 15px 15px 0px",
        fontSize: "15px",
      }}
    >
      {props.name}
    </Button>
  );
};

function Community() {
  return (
    <Card
      sx={{
        width: "80%",
        margin: "0 auto",
        padding: "15px",
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item name="Guitar" link="/feed" />
        </Grid>
        <Grid item xs={6}>
          <Item name="Basketball" link="/feed" />
        </Grid>
        <Grid item xs={6}>
          <Item name="Piano" link="/feed" />
        </Grid>
        <Grid item xs={6}>
          <Item name="Swimming" link="/feed" />
        </Grid>
      </Grid>
    </Card>
  );
}

export default Community;
