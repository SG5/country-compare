import * as actions from './actions';

const initialState = {
  list: [],
};

function countries(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_COUNTRIES_SUCCESS:
      const countries = action.payload.map(el => ({
        name: el,
      }));
      return {
        ...state,
        list: countries.sort((a, b) => a.name.localeCompare(b.name)),
      };
    default:
      return state;
  }
}

export default countries;