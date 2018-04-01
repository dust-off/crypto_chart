import React from 'react'
import { Bar, Line } from 'react-chartjs-2';
import moment from 'moment'

const chartData = {
    labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
    datasets: [
        {
            label: 'Population',
            data: [
                617594,
                181045,
                153060,
                106519,
                105162,
                95072
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)'
            ]
        }
    ]
}

const lineData = {
    labels: ['12:31', '12:32', '12:33', '12:34', '12:35', '12:36', 'S12:37', '12:38', '12:39', '12:40', '12:41', '12:42', '12:43', '12:44', '12:45', '12:46', '12:47', '12:48', '12:49'],
    datasets: [{
        label: 'BitCoin',
        data: [430.89, 430.89, 430.89, 430.89, 430.89, 430.89, 430.89, 430.89, 430.89, 430.89, 430.89, 430.89, 430.89, 430.89, 430.89, 430.89, 430.89, 430.89],
        backgroundColor: "rgba(153,255,51,0.4)"
    }]
}

// var ISO_8601 = /^(?:[1-9]\d{3}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[1-9]\d(?:0[48]|[2468][048]|[13579][26])|(?:[2468][048]|[13579][26])00)-02-29)T(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d{1,9})?(?:Z|[+-][01]\d:[0-5]\d)$/;
// if (ISO_8601.test(log.time_open)) {
//     var temp = new Date(Date.parse(log.time_open));
//     console.log(temp)
// }

const dataToChart = (raw) => {
    let labels = [];
    let data = [];
    let timeSpan = [];

    // let interval = (raw.length / 10);
    // let count = interval;

    raw.forEach((log) => {
        // if (count === interval) {
        let time = moment(log.time_open)
        let day = time.format("MM-DD-YYYY")
        let hours = time.format("h:mm:ss a")

        if (timeSpan[timeSpan.length-1] !== day) {
            timeSpan.push(day)
            if (timeSpan.length > 1) {
                hours = `${day} @ ${hours}`
                console.log(hours)
            }
        }

        labels.push(hours);
        data.push(log.price_open);
        //     count = 0;
        // } else {
        //     count++;
        // }
    })

    console.log(timeSpan)

    let graph =  {
        labels,
        options: {
            title: {
                text: 'test'
            }
        },
        datasets: [{
            label: 'BitCoin',
            data,
            backgroundColor: "rgba(153,255,51,0.4)"
        }]
    }
    return { graph, timeSpan };
}

const Graph = ({ raw }) => {
    let cleanData = dataToChart(raw)
    return (
        <div className='chart'>
            graph page {cleanData.timeSpan[0]} to {cleanData.timeSpan[cleanData.timeSpan.length-1]}
            <Line
                data={cleanData.graph}
                options={{
                    title: {
                        display: true,
                        text: 'BIG CHART',
                        fontSize: 25,
                    }
                }}
            />
        </div>
    )
}

export default Graph