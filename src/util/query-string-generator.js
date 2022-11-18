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

const SortDirection = {
    Asc: "asc",
    Desc: "desc"
}

const createQueryString = (filters, pagination, sorting) => {
    var queryString = '?';

    if (filters != undefined && filters.length > 0) {
        for (var i = 0; i < filters.length; i++) {
            queryString += filters[i];
            if (i != filters.length - 1) {
                queryString += '&';
            }
        }
    }

    if (pagination != undefined && pagination != "") {
        queryString += pagination;
    }

    if (sorting != undefined && sorting != "") {
        queryString += sorting;
    }

    return queryString == '?' ? '' : queryString;
}

const createFilterString = (filterAttribute, filterOperation, filterValue) => {
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

const createPaginationString = (limit = 10, page = 1, offset = 0) => {
    return `limit=${limit}&page=${page}&offset=${offset}`;
}

const createSortingString = (attribute = 'name', sortDirection = SortDirection.Asc) => {
    return `sort=${attribute}:${sortDirection}`;
}

module.exports = { createQueryString, createFilterString, createPaginationString, createSortingString, FilterOperation, SortDirection };