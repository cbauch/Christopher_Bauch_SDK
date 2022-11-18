// Defines filter operations that are allowed on the api
// Also maps to the actual string used for each
const FilterOperation = {
    MatchIncludeOrRegex: "=",
    NegateMatchOrExclude: "!=",
    Exists: "",
    DoesNotExist: "!",
    LessThan: "<",
    LessThanOrEqual: "<=",
    GreaterThan: ">",
    GreaterThanOrEqual: ">="
}

// Defines the direction options and string mappings for the api
const SortDirection = {
    Asc: "asc",
    Desc: "desc"
}

/**
 * Creates a query string using optional components.  Returns an empty string if there are not contents to the resulting querystring.
 * 
 * @param {Array} filters An array of filters to apply. 
 * @param {string} pagination A string defining how many results to return and how many to skip before selecting results to return.
 * @param {string} sorting A string defining an attribute to sort by and a direction to sort them in.
 * @returns A query string beginning with the '?' character.  An empty string if there are no queries in the input.
 */
const createQueryString = (filters, pagination, sorting) => {
    var queryString = '?';

    // If there are filters, add them separated by '&'
    if (filters != undefined && filters.length > 0) {
        for (var i = 0; i < filters.length; i++) {
            queryString += filters[i];
            if (i != filters.length - 1) {
                queryString += '&';
            }
        }
    }

    // If there are pagination settings, add them (prefixed with '&' if there are already other queries)
    if (pagination != undefined && pagination != "") {
        if (queryString != "?") {
            queryString += "&";
        }
        queryString += pagination;
    }

    // If there are sorting settings, add them (prefixed with '&' if there are already other queries)
    if (sorting != undefined && sorting != "") {
        if (queryString != "?") {
            queryString += "&";
        }
        queryString += sorting;
    }

    // Return the query string or an empty string if there are no queries
    return queryString == '?' ? '' : queryString;
}

/**
 * Creates a filter string.
 * 
 * @param {string} filterAttribute The return object's attribute for the filter.
 * @param {string} filterOperation The operation to perform for the filter.
 * @param {string} filterValue An optional value that is needed for operations that need it (such as equality operators).
 * @returns A filter string ready to be added to a query string.
 */
const createFilterString = (filterAttribute = '_id', filterOperation = FilterOperation.Exists, filterValue) => {
    var filter = '';
    switch (filterOperation) {
        case FilterOperation.MatchIncludeOrRegex:
        case FilterOperation.NegateMatchOrExclude:
        case FilterOperation.LessThan:
        case FilterOperation.LessThanOrEqual:
        case FilterOperation.GreaterThan:
        case FilterOperation.GreaterThanOrEqual:
            filter = filterAttribute + filterOperation + filterValue;
            break;
        case FilterOperation.Exists:
            filter = filterAttribute;
            break;
        case FilterOperation.DoesNotExist:
            filter = filterOperation + filterAttribute;
            break;
    }
    return filter;
}

/**
 * Create a pagination string with limit and page values
 * 
 * @param {number} limit How many items to return at once.
 * @param {number} page Which set of items to return (1 until no more items remain).
 * @returns A string for use in a query string defining pagination.
 */
const createPaginationStringWithPage = (limit = 10, page = 1) => {
    return `limit=${limit}&page=${page}`;
}

/**
 * Create a pagination string with limit and offset values
 * 
 * @param {number} limit How many items to return at once.
 * @param {number} offset How many items to skip before selecting items to return.
 * @returns A string for use in a query string defining pagination.
 */
const createPaginationStringWithOffset = (limit = 10, offset = 0) => {
    return `limit=${limit}&offset=${offset}`;
}

/**
 * Creates a sorting string using an attribute and direction.
 * 
 * @param {string} attribute The name of the object's attribute to sort by.
 * @param {SortDirection} sortDirection The direction to sort by (ascending or descending)
 * @returns 
 */
const createSortingString = (attribute = 'name', sortDirection = SortDirection.Asc) => {
    return `sort=${attribute}:${sortDirection}`;
}

module.exports = { createQueryString, createFilterString, createPaginationStringWithPage, createPaginationStringWithOffset, createSortingString, FilterOperation, SortDirection };