import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MetricSelector from './MetricSelector';
import Chart from "./Chart";

const useStyles = makeStyles({
    paper: {
        margin: "3%",
        padding: "20px"
    }
});

export default () => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <MetricSelector />
            <Typography variant="h5" component="h3">
                <Chart />
            </Typography>
        </Paper>
    );
}
