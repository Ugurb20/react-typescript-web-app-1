# Technical Documentation

## API Requests

The page makes the following API request:

* `/api/scheduling/customers?name={text_value}&page={page_value}&sort={sort_field}` - Retrieves a list of customers based on the provided query parameters. The `name` parameter represents the search name text, the `page` parameter represents the current page number, and the `sort` parameter represents the sorting field.

## React Hooks

The page uses the following React hooks:

* `useFilterCustomers` - Manages the state related to customer filtering, including the search name text, current page, and sort field. It triggers the API request with the updated parameters based on user interactions.

## All Interactions

The user can interact with the page in the following ways:

1. Enter text in the "Search Name" field.
2. Click the "Search" button to trigger a search request based on the entered name text.
3. Click the pagination buttons to navigate between different pages.
4. Select a sorting option from the dropdown menu to change the sorting field.
5. When any of the above interactions occur, the page automatically sends an API request with the updated parameters (name, page, and sort field) to retrieve the filtered customers.

## Caching

The page caches the query responses using `SessionStorage`. The caching is done based on the combination of `name`, `page`, and `sort` values. Each unique combination is used as a key to store the corresponding response. By caching the responses, subsequent requests with the same parameters can be retrieved from the cache instead of making additional API calls.

## Author

This technical documentation was written by ovuruska.
