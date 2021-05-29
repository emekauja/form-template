import { SearchActionTypes } from './search.types';

const initialState = {
  filteredTemplates: [],
  filterText: '',
  category: '',
  order: '',
  created: '',

  // loading: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SearchActionTypes.FILTER_BY_TEXT:
      return {
        ...state,
        filterText: payload.filterText,
        filteredTemplates: payload.filteredTemplates,
      };

    case SearchActionTypes.SORT_BY_CATEGORY:
      return {
        ...state,
        category: payload.category,
        filteredTemplates: payload.filteredTemplates,
      };

    case SearchActionTypes.SORT_BY_ORDER:
      return { ...state, order: payload };

    case SearchActionTypes.SORT_BY_DATE_CREATED:
      return {
        ...state,
        created: payload.created,
        filteredTemplates: payload.filteredTemplates,
      };

    default:
      return state;
  }
};
