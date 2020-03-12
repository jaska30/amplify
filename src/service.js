var appURL = "https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishCoronaData"
var axios = require('axios');

function getUsers() {
    return axios.get(appURL)
}


export {getUsers};