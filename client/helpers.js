import moment from 'moment'

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

        if (timeSpan[timeSpan.length - 1] !== day) {
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

    let graph = {
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

export default {dataToChart};