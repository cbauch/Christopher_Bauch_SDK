const callTheOneAPI = require("./util/http-theoneapi");
const { createQueryString, createFilterString, createPaginationString, createSortingString, FilterOperation, SortDirection } = require("./util/query-string-generator");

const createAPICall = (urlBase, authToken, filters, pagination, sorting) => {
    const queryString = createQueryString(filters, pagination, sorting);
    return callTheOneAPI(authToken, urlBase + queryString);
}

class TheOneAPI {

    static FilterOperation = FilterOperation;

    static SortDirection = SortDirection;

    static createFilter = createFilterString;

    static createPagination = createPaginationString;

    static createSorting = createSortingString;

    static findBooks(authToken, filters, pagination, sorting) {
        return createAPICall("book", authToken, filters, pagination, sorting);
    }

    static findChapters(authToken, filters, pagination, sorting) {
        return createAPICall("chapter", authToken, filters, pagination, sorting);
    }

    static findMovies(authToken, filters, pagination, sorting) {
        return createAPICall("movie", authToken, filters, pagination, sorting);
    }

    static findQuotes(authToken, filters, pagination, sorting) {
        return createAPICall("quote", authToken, filters, pagination, sorting);
    }

    static findCharacters(authToken, filters, pagination, sorting) {
        return createAPICall("character", authToken, filters, pagination, sorting);
    }

}

module.exports = TheOneAPI;