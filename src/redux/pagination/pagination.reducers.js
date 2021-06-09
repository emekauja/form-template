import { PaginationActionTypes } from './pagination.types';

const initialState = {
  currentPage: 1,
  // limit: 15,
  totalPages: 0,

  // loading: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PaginationActionTypes.LOAD_NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
        totalPages: payload.totalPages,
      };

    case PaginationActionTypes.LOAD_PREVIOUS_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1,
        totalPages: payload.totalPages,
      };

    default:
      return state;
  }
};
