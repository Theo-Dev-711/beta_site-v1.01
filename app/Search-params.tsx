import { parseAsFloat, createLoader, parseAsString, parseAsInteger } from 'nuqs/server'

// Describe your search params, and reuse this in useQueryStates / createSerializer:
export const coordinatesSearchParams = {
    search: parseAsString.withDefault(""),
    perPage: parseAsFloat.withDefault(10),
    offset: parseAsInteger.withDefault(0)
}

export const loadSearchParams = createLoader(coordinatesSearchParams)