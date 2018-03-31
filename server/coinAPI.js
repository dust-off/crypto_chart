
var axios = require("axios")
var ISO_8601 = /^(?:[1-9]\d{3}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[1-9]\d(?:0[48]|[2468][048]|[13579][26])|(?:[2468][048]|[13579][26])00)-02-29)T(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d{1,9})?(?:Z|[+-][01]\d:[0-5]\d)$/;
// function formatDate(d) {
//     return (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
// }

var transformResponse = axios.defaults.transformResponse.concat(function (data) {
    var tmp = function (item) {
        return Object.keys(item).forEach(function (k) {
            // console.log(item[k], ISO_8601.test(item[k]))
            if (ISO_8601.test(item[k])) {
                item[k] = new Date(Date.parse(item[k]));
            }
        });
    };
    tmp(data);
    if (Array.isArray(data)) {
        data.forEach(tmp);
    }
    else {
        tmp(data);
    }
    return data;
});
var COIN_API_SDK = (function () {
    function COIN_API_SDK(api_key) {
        if (api_key === void 0) { api_key = null; }
        this.api_key = "";
        this.headers = {};
        this.url = "https://rest-test.coinapi.io";
        if (api_key) {
            this.api_key = api_key;
            this.headers = {
                "X-CoinAPI-Key": api_key
            };
            this.url = "https://rest.coinapi.io";
        }
    }
    COIN_API_SDK.prototype.BITSTAMP_SPOT_BTC_USD = function (period = '1MIN', timeStart = '2016-01-01T00:00:00') {
        var path = this.url + `/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/history?period_id=${period}&time_start=${timeStart}`;
        return axios.get(path, { headers: this.headers, transformResponse: transformResponse })
            .then(function (resp) {
                return resp.data;
            });
    };
    // COIN_API_SDK.prototype.metadata_list_assets = function () {
    //     var path = this.url + "/v1/assets";
    //     return axios.get(path, { headers: this.headers, transformResponse: transformResponse })
    //         .then(function (resp) {
    //             return resp.data;
    //         });
    // };
}



// const period = '1MIN'
// const timeStart = '2016-01-01T00:00:00'
// const url = `https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/history?period_id=${period}&time_start=${timeStart}`