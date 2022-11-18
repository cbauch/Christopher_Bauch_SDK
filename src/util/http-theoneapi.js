
const apiEndpoint = "https://the-one-api.dev/v2";
const axios = require("axios");
const axiosInstance = axios.create({
    baseURL: apiEndpoint
});

/**
 * Creates an error message from the API's error response
 * 
 * @param {*} err The error object returned from Axios 
 * @returns A simple string message to use in exceptions or rejections.
 */
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

/**
 * Returns a promise that will return the results of the api call
 * 
 * @param {string} authToken The string to use as the Authorization Bearer token.
 * @param {string} url The path after the api endpoint including query string
 * @returns A promise that will return the response data or an error.
 */
const callTheOneAPI = (authToken, url) => {
    return new Promise(function (resolve, reject) {
        axiosInstance.get(url, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }).then(res => {
            // Call may succeed over the network, but the server may still return an error message.
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

