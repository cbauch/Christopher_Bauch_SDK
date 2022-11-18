const processFilters = (filters) => {
    return '';
}

const processPagination = (pagination) => {
    return '';
}

const processSorting = (sorting) => {
    return '';
}

const createQueryString = (filters, pagination, sorting) => {
    var queryString = '?';

    if (filters != undefined) {
        queryString += processFilters(filters);
    }

    if (pagination != undefined) {
        queryString += processPagination(pagination);
    }

    if (sorting != undefined) {
        queryString += processSorting(sorting);
    }

    return queryString == '?' ? '' : queryString;
}

module.exports = createQueryString;