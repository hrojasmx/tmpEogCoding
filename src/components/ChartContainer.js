import React, { useEffect } from "react";
import { Provider, createClient, useQuery } from "urql";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
import Chart from './Chart';
import MetricSelector from './MetricSelector';

const useStyles = makeStyles({
    paper: {
        margin: "3%",
        padding: "20px"
    }
});

const client = createClient({
    url: "https://react.eogresources.com/graphql"
});

const heartbeatQuery = `
query {
  heartBeat                                                                                                              
}
`;

export default () => {
    return (
        <Provider value={client}>
            <ChartContainer />
        </Provider>
    );
};

const ChartContainer = () => {
    const classes = useStyles();

    const [heartBeatRes] = useQuery({
        query: heartbeatQuery
    });

    const { data, error } = heartBeatRes;

    useEffect(
        () => {
            if (error) {
                console.log(error.message);
                return;
            }
            if (!data) return;
            console.log(data);
        }
    );

    return (
        <Paper className={classes.paper}>
            <MetricSelector />
            <Chart />
        </Paper>
    );
}
