
const apiEndpoint = "https://the-one-api.dev/v2";
const axios = require("axios");
const axiosInstance = axios.create({
    baseURL: apiEndpoint
});

const processAPIError = (err) => {
    var errorMessage;
    if (err.response) {
        errorMessage = `Server responded with ${err.response.status}: ${err.response.data}`;
    } else if (err.request) {
        errorMessage = `No response received.`;
    } else {
        errorMessage = `Creating request failed: ${err.message}`;
    }
    return errorMessage;
}

const callTheOneAPI = (authToken, url) => {
    return new Promise(function (resolve, reject) {
        axiosInstance.get(url, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }).then(res => {
            if (res.data.success == false) {
                reject(`Server responded with an error message: ${res.data.message}`);
            } else {
                resolve(res.data);
            }
        }).catch(err => {
            reject(processAPIError(err));
        });
    });
}

module.exports = callTheOneAPI;

