import React from 'react'
import { Bar, Line } from 'react-chartjs-2';
import helpers from '../helpers'
import raw from '../../data/timeData'

const { dataToChart } = helpers;

import Button from 'material-ui/Button';
import Calendar from 'react-calendar';

const Graph = ({ graph, handleGraphDateChange }) => {
    if (!graph.data) {
        handleGraphDateChange(dataToChart(raw))
        return <div>rendering </div>
    }
    return (
        <div className='chart'>
            {graph.data.length}
            graph page 
            <Button variant="raised" color="primary">
                Hello World
            </Button>
            <Line
                data={graph.data.graph}
                options={{
                    title: {
                        display: true,
                        text: `${ graph.data.timeSpan[0] } to ${ graph.data.timeSpan[graph.data.timeSpan.length - 1] }`,
                        fontSize: 25,
                    }
                }}
            />
            <div>
                {/* <Calendar /> */}
            </div>
        </div>
    )
}

export default Graph