import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import axios from "axios";

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
// const community_data = ["Guitar", "Basketball", "Piano", "Swimming"];

function Community() {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/communities")
      .then((response) => {
        console.log(response.data);
        setCommunities(response.data);
      });
  }, []);

  return (
    <Card
      sx={{
        width: "80%",
        margin: "0 auto",
        padding: "15px",
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {communities.map((community, idx) => (
          <Grid item xs={6} key={idx}>
            <Item name={community.name} link="/feed" />
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}

export default Community;
