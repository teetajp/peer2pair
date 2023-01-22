import react, { useEffect } from "react";
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { margin } from "@mui/system";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const Item = (props) => {
    return (
    <Button href={props.link} variant="contained" sx={{
        width: '100%', height: '70px', margin:'0px 15px 15px 0px',
        fontSize: '15px',
    }}>{props.name}</Button>
    )
}

function Community() {
    return (
        <Card sx={{
            width: '80%',
            margin: '0 auto',
            padding: '15px',
        }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Item name="Guitar" link="#"/>
                </Grid>
                <Grid item xs={6}>
                    <Item name="Basketball" link="#"/>
                </Grid>
                <Grid item xs={6}>
                    <Item name="Piano" link="#"/>
                </Grid>
                <Grid item xs={6}>
                    <Item name="Swimming" link="#"/>
                </Grid>
            </Grid>
        </Card>
    );
}

export default Community;