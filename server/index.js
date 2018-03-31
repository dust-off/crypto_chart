const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = require('./routes')

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

const sdk = require('./api.js');

var test2 = Date.parse('04 Dec 2017 00:12:00 PST')
var time1 = new Date(test2)

var test2 = Date.parse('12 Dec 2017 00:12:00 PST')
var time2 = new Date(test2)

let perams = ['BITSTAMP_SPOT_BTC_USD', '1MIN', time1, time2, 5]

console.log('')
console.log('TEST')
let test = sdk.ohlcv_historic_data(...perams)
console.log(test)
console.log('')