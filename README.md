# Christopher_Bauch_SDK

## _An Node SDK for The One API, a Lord of the Rings API_

## Overview
Christopher_Bauch_SDK provides a single class "TheOneAPI".  As the name implies, this class contains functions to call The One API.  It also contains helper functions and objects to assist in creating filters, pagination strings, and sorting strings.

## Helpers
1. __FilterOperation__ - An object with all the operations that filters can provide, all require an attribute, but only some require a comparison value.
2. __SortDirection__ - An object defining ascending and descending attributes to use when creating sorting strings.
3. __createFilter__ - A helper function that creates filter strings that can be passed to api calls in arrays.  Takes an attribute to filter, a FilterOperation, and in some cases a filter/comparison value
4. __createPaginationStringWithOffset__ - A helper function that creates a pagination string that can be passed to api calls.  This one uses limit and offset.
5. __createPaginationStringWithPage__ - A helper function that creates a pagination string that can be passed to api calls.  This one uses limit and page number.
5. __createSorting__ - A helper function to create sorting strings.  Takes an attribute to sort by and SortDirection.

## Operations
1. __searchBooks__ - Searches through Lord of the Rings books.
2. __searchChapters__ - Searches through chapters in the Lord of the Rings books.
3. __searchMovies__ - Searches through Lord of the Rings movies.
4. __searchQuotes__ - Searches through Lord of the Rings quotes from the movies.
5. __searchCharacters__ - Searches through Lord of the Rings characters.

## Installation
1. Install using npm:
```sh
npm install @cbauch/Christopher_Bauch_SDK
```
2. Import TheOneAPI object into your code:
```js
const TheOneAPI = require('Christopher_Bauch_SDK');
```
3. Call functions and use helpers:
```js
const authToken = 'Your_API_Token'
TheOneAPI.findBooks(
    authToken, 
    TheOneAPI.createFilter(name, TheOneAPI.FilterOperation.MatchIncludeOrRegex, "The Fellowship Of The Ring")
);
```

## Tests

Jest must be installed to run the tests.  They can be run with the command:
```sh
npm test --prefix path/to/Christopher_Bauch_SDK
```