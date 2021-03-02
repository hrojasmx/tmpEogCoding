import React, { useEffect } from "react";
import { Provider, createClient, useQuery } from "urql";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";


const client = createClient({
    url: "https://react.eogresources.com/graphql"
});


const measurementQuery = `
query($input: MeasurementQuery) {
  getMeasurements(input: $input) {
    metric,
    at,
    value,
    unit
  }                                                                                                                                  
}
`;

const useStyles = makeStyles({
    chartBox: {
        padding: "5px 0"
    }
});

const testData = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100
    }
];


const Chart = () => {
    const classes = useStyles();

    const [measurementRes] = useQuery({
        query: measurementQuery,
        variables: {
            input: {
                metricName: "oilTemp",
                before: 1564937515898,
                after: 1564937515898 - 1800000
            }
        }
    });

    const { data, error } = measurementRes;

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
        <Box className={classes.chartBox}>
            <ResponsiveContainer width="100%" minWidth={300} aspect={16.0 / 9.0}>
                <LineChart
                    // width={1000}
                    height={600}
                    data={testData}
                    margin={{
                        top: 5,
                        right: 5,
                        left: 5,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    {/* <Legend /> */}
                    <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#8884d8"
                        activeDot={{ r: 6 }}
                    />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    );
};


export default () => {
    return (
        <Provider value={client}>
            <Chart />
        </Provider>
    );
};

// export default () => {
//     const classes = useStyles();
//
//     return (
//         <Box className={classes.chartBox}>
//             <ResponsiveContainer width='100%' minWidth={300} aspect={16.0/9.0}>
//                 <LineChart
//                     // width={1000}
//                     height={600}
//                     data={data}
//                     margin={{
//                         top: 5, right: 5, left: 5, bottom: 5,
//                     }}
//                 >
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip />
//                     {/* <Legend /> */}
//                     <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 6 }} />
//                     <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//                 </LineChart>
//             </ResponsiveContainer>
//         </Box>
//     );
// }
