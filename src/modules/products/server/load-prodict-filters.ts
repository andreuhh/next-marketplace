import { createLoader, parseAsString } from "nuqs/server";

// Same schema, but used for server-side parsing
export const params = {
    minPrice: parseAsString.withOptions({ clearOnDefault: true }),
    maxPrice: parseAsString.withOptions({ clearOnDefault: true }),
};

// Server function: safely parses query params on the server
export const loadProductFilters = createLoader(params);
