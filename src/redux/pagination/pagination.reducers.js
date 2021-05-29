import { PaginationActionTypes } from './pagination.types';

const initialState = {
  currentPage: 1,
  // templatesPerPage: 15,
  totalPages,

  // loading: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PaginationActionTypes.LOAD_NEXT_PAGE:
      return {
        ...state,
        currentPage: payload.currentPage,
        totalPages: payload.totalPages,
      };

    case PaginationActionTypes.LOAD_PREVIOUS_PAGE:
      return {
        ...state,
        currentPage: payload.currentPage,
        totalPages: payload.totalPages,
      };

    case PaginationActionTypes.SORT_BY_ORDER:
      return { ...state, order: payload };

    case PaginationActionTypes.SORT_BY_DATE_CREATED:
      return {
        ...state,
        created: payload.created,
        filteredTemplates: payload.filteredTemplates,
      };

    default:
      return state;
  }
};
