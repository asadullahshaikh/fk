import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import PieChart from "highcharts-react-official";
import { Grid } from '@material-ui/core'
const options = {
    title: {
        text: 'My chart'
    },
    series: [{
        data: [1, 2, 3]
    }]
}

const optionspie = {
    chart: {
        type: "pie"
    },
    title: {
        text: ""
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
                enabled: false
            },
            showInLegend: false
        }
    },
    series: [
        {
            name: "",
            color: "#006600",
            lineWidth: 1,
            marker: {
                enabled: false,
                symbol: "circle",
                radius: 3,
                states: {
                    hover: {
                        enabled: true,
                        lineWidth: 1
                    }
                }
            },
            data: [
                {
                    y: 100,
                    sliced: true
                },
                {
                    y: 33,
                    sliced: true
                }
            ]
        }
    ]
};




const Home = () => <div>
    <Grid container >
        <Grid sm={6} item>
            <HighchartsReact
                highcharts={Highcharts}
                options={optionspie}
            />
        </Grid>
        <Grid sm={6} item>
            <PieChart highcharts={Highcharts} options={options} />

        </Grid>

    </Grid>

</div>
export default Home