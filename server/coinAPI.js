const { COINAPI_KEY } = require('./keys')
var axios = require("axios")

// var ISO_8601 = /^(?:[1-9]\d{3}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[1-9]\d(?:0[48]|[2468][048]|[13579][26])|(?:[2468][048]|[13579][26])00)-02-29)T(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d{1,9})?(?:Z|[+-][01]\d:[0-5]\d)$/;
// var transformResponse = axios.defaults.transformResponse.concat(function (data) {
//     var tmp = function (item) {
//         return Object.keys(item).forEach(function (k) {
//             if (ISO_8601.test(item[k])) {
//                 item[k] = new Date(Date.parse(item[k]));
//             }
//         });
//     };
//     tmp(data);
//     if (Array.isArray(data)) {
//         data.forEach(tmp);
//     }
//     else {
//         tmp(data);
//     }
//     return data;
// });

const BASE_URL = 'https://rest.coinapi.io'

var COIN_API = {
    BITSTAMP_SPOT_BTC_USD: (period = '1MIN', timeStart = '2016-01-01T00:00:00', limit = 5) => {
        var path = this.url + `${BASE_URL}/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/history?period_id=${period}&time_start=${timeStart}&limit=${limit}`;
        return axios.get(path, { headers: { "X-CoinAPI-Key": COINAPI_KEY } })
            .then(function (resp) {
                return resp.data;
            })
            .catch((err) => {
                console.log('API FAIL')
                throw err
            })
    },
};

exports["default"] = COIN_API;
