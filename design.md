# Design of Christopher_Bauch_SDK

## Design Decisions

1. __Condensed the endpoints down into search functions for the five different objects__

    - I saw that some of the operations could be expressed as a different operation with a filter, such as `/book/:id` can be expressed as `/book?_id=<id>`.

2. __Combined logic for function calls__

    - Since all five objects accepted the same querystring elements for pagination and sorting, I combined the logic for them by just passing a common function call the base url.
    - Filters can be different based on attributes available.  However, as users pass them in as strings, they can still be handled the same across operations.

3. __Created two utility scripts__

    - The networking function call and the query string assembly made sense to live in helper utility files.  They could be modified to be used across other projects.  It also separates functionality:
        1. The API class is only concerned with exposing operations and helper functions.
        2. The http script is just a wrapper for an Axios instance pointing to the API endpoint.
        3. The query string helper script contains functions and objects that only deal with defining and assembling the query string.  This could be changed in the future to wrap a query string library for more complex functionality.

4. __Used Jest for unit testing__

    - In order to verify that the functions were implemented properly, I included Jest test functions in a test directory and a test script in the `package.js` file.

5. __Used np to handle publishing to npm__

    - To ease the versioning, tagging, and publishing process, I am using np to make sure steps are not forgotten when releasing new code to the npm package.

## Future Considerations

1. The tests contain a hard coded api key.  This should be abstracted out and defined as an environment variable.
2. There is no definition of what not to package for npm.  All files are being sent, which should be stripped down to just what is needed for production.
3. The query string generator could probably be wrapping a library that handles query strings in a much more flexible manner than the hand-coded script.