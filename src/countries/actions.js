export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS';


export function fetchCountries() {
  return {type: FETCH_COUNTRIES};
}