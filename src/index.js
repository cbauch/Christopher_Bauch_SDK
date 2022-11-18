const callTheOneAPI = require("./util/http-theoneapi");
const createQueryString = require("./util/query-string-generator");

class TheOneAPI {

    static findBooks(authToken, filters, pagination, sorting) {
        const url = "book";
        const queryString = createQueryString(authToken, filters, pagination, sorting);
        return callTheOneAPI(authToken, url + queryString);
    }

    static findChapters(authToken, filters, pagination, sorting) {
        const url = "chapter";
        const queryString = createQueryString(authToken, filters, pagination, sorting);
        return callTheOneAPI(authToken, url + queryString);
    }

    static findMovies(authToken, filters, pagination, sorting) {
        const url = "movie";
        const queryString = createQueryString(authToken, filters, pagination, sorting);
        return callTheOneAPI(authToken, url + queryString);
    }

    static findQuotes(authToken, filters, pagination, sorting) {
        const url = "quote";
        const queryString = createQueryString(authToken, filters, pagination, sorting);
        return callTheOneAPI(authToken, url + queryString);
    }

    static findCharacters(authToken, filters, pagination, sorting) {
        const url = "character";
        const queryString = createQueryString(authToken, filters, pagination, sorting);
        return callTheOneAPI(authToken, url + queryString);
    }

}

module.exports = TheOneAPI;