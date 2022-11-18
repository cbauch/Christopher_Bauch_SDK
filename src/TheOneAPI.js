const callTheOneAPI = require("./util/http-theoneapi");
const { createQueryString, createFilterString, createPaginationStringWithPage, createPaginationStringWithOffset, createSortingString, FilterOperation, SortDirection } = require("./util/query-string-generator");

/**
 *  Builds the query string and then calls The One API using the urlBase and authToken.
 *   
 * @param {string} urlBase The path after the api endpoint for this operation.
 * @param {string} authToken The bearer token to use when calling the api (required for most operations).
 * @param {Array} filters An array of strings representing filters (can use createFilter to generate them).
 * @param {string} pagination A string with pagination settings (can use either createPaginationWithPage or createPaginationWithOffset to generate it).
 * @param {string} sorting A string with sorting settings (can use createSorting to generate it).
 * 
 * @return {promise} Returns a promise that will contain the requested data when it completes or an error message if it does not.
 */
const createAPICall = (urlBase, authToken, filters, pagination, sorting) => {
    const queryString = createQueryString(filters, pagination, sorting);
    return callTheOneAPI(authToken, urlBase + queryString);
}

/**
 * The class containing static functions to call The One API and related helper functions and objects.
 */
class TheOneAPI {

    // Contains operations to use when creating filters
    static FilterOperation = FilterOperation;

    // Contains sort directions (asc and desc)
    static SortDirection = SortDirection;

    /**
     * Creates a single filter string
     * 
     * @param {string} filterAttribute A string matching an attribute name to be used in the filter.
     * @param {FilterOperation} filterOperation A FilterOperation representing one of the options for the filter.
     * @param {string} filterValue A value that is sometimes required when the FilterOperation implies a comparison.
     * 
     * @return {string} A filter that can be added to an array and then passed to an operation call.
     */
    static createFilter = createFilterString;

    /**
     * Create a pagination string using a limit and a page
     * 
     * @param {number} limit Number of results to return at once.
     * @param {number} page Which page of results to return, using limit to define the size of a single page.
     * 
     * @return {string} A pagination string that can be passed to operation calls.
     */
    static createPaginationWithPage = createPaginationStringWithPage;

    /**
     * Create a pagination string using a limit and a offset
     * 
     * @param {number} limit Number of results to return at once.
     * @param {number} offset How many results to skip before selecting the ones to return.
     * 
     * @return {string} A pagination string that can be passed to operation calls.
     */
    static createPaginationStringWithOffset = createPaginationStringWithOffset;

    /**
     * Creates a sorting string using an attribute name and a SortDirection
     * 
     * @param {string} attribute The name of the attribute to sort by.
     * @param {SortDirection} sortDirection The sort direction to use (ascending or descending).
     * 
     * @return {string} A sorting string that can be passed to operation calls.
     */
    static createSorting = createSortingString;

    /**
     * Search books on The One API.  Note that a filter with _id=<book id> will return a single book.
     * 
     * @param {string} authToken The bearer token to use when calling the api (required for most operations).
     * @param {Array} filters An array of strings representing filters (can use createFilter to generate them).
     * @param {string} pagination A string with pagination settings (can use either createPaginationWithPage or createPaginationWithOffset to generate it).
     * @param {string} sorting A string with sorting settings (can use createSorting to generate it).
     * 
     * @return {promise} Returns a promise that will contain the requested data when it completes or an error message if it does not.
     */
    static searchBooks(authToken, filters, pagination, sorting) {
        return createAPICall("book", authToken, filters, pagination, sorting);
    }

    /**
     * Search chapters on The One API.  Note that a filter with _id=<chapter id> will return a single chapter.
     * 
     * @param {string} authToken The bearer token to use when calling the api (required for most operations).
     * @param {Array} filters An array of strings representing filters (can use createFilter to generate them).
     * @param {string} pagination A string with pagination settings (can use either createPaginationWithPage or createPaginationWithOffset to generate it).
     * @param {string} sorting A string with sorting settings (can use createSorting to generate it).
     * 
     * @return {promise} Returns a promise that will contain the requested data when it completes or an error message if it does not.
     */
    static searchChapters(authToken, filters, pagination, sorting) {
        return createAPICall("chapter", authToken, filters, pagination, sorting);
    }

    /**
     * Search movies on The One API.  Note that a filter with _id=<movie id> will return a single movie.
     * 
     * @param {string} authToken The bearer token to use when calling the api (required for most operations).
     * @param {Array} filters An array of strings representing filters (can use createFilter to generate them).
     * @param {string} pagination A string with pagination settings (can use either createPaginationWithPage or createPaginationWithOffset to generate it).
     * @param {string} sorting A string with sorting settings (can use createSorting to generate it).
     * 
     * @return {promise} Returns a promise that will contain the requested data when it completes or an error message if it does not.
     */
    static searchMovies(authToken, filters, pagination, sorting) {
        return createAPICall("movie", authToken, filters, pagination, sorting);
    }

    /**
     * Search quotes on The One API.  Note that a filter with _id=<quote id> will return a single quote.
     * 
     * @param {string} authToken The bearer token to use when calling the api (required for most operations).
     * @param {Array} filters An array of strings representing filters (can use createFilter to generate them).
     * @param {string} pagination A string with pagination settings (can use either createPaginationWithPage or createPaginationWithOffset to generate it).
     * @param {string} sorting A string with sorting settings (can use createSorting to generate it).
     * 
     * @return {promise} Returns a promise that will contain the requested data when it completes or an error message if it does not.
     */
    static searchQuotes(authToken, filters, pagination, sorting) {
        return createAPICall("quote", authToken, filters, pagination, sorting);
    }

    /**
     * Search characters on The One API.  Note that a filter with _id=<character id> will return a single character.
     * 
     * @param {string} authToken The bearer token to use when calling the api (required for most operations).
     * @param {Array} filters An array of strings representing filters (can use createFilter to generate them).
     * @param {string} pagination A string with pagination settings (can use either createPaginationWithPage or createPaginationWithOffset to generate it).
     * @param {string} sorting A string with sorting settings (can use createSorting to generate it).
     * 
     * @return {promise} Returns a promise that will contain the requested data when it completes or an error message if it does not.
     */
    static searchCharacters(authToken, filters, pagination, sorting) {
        return createAPICall("character", authToken, filters, pagination, sorting);
    }

}

module.exports = TheOneAPI;