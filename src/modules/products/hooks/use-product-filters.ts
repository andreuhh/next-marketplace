"use client";

import { useQueryStates } from "nuqs";
import { parseAsString } from "nuqs/server";

// Define the shared filter schema
export const params = {
    minPrice: parseAsString.withOptions({ clearOnDefault: true }),
    maxPrice: parseAsString.withOptions({ clearOnDefault: true }),
};

// Client hook: used in components for interactive filtering
export const useProductFilters = () => {
    return useQueryStates(params);
};
