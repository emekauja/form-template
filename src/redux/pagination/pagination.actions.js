import { PaginationActionTypes } from './pagination.types';
import { paginate, pageLimit } from './pagination.utils';

export const loadNextPage = (templates, currentPage) => (dispatch) => {
  const nextPage = currentPage + 1;
  // const previousPage = currentPage - 1;
  const totalPages = Math.ceil(templates.length / pageLimit);

  // const updateData = paginate(templates, previousPage);

  dispatch({
    type: PaginationActionTypes.LOAD_NEXT_PAGE,
    payload: {
      currentPage: nextPage,
      totalPages: totalPages,
      templates: templates,
    },
  });
};

export const loadPreviousPage = () => (dispatch, getState) => {
  const { templates, currentPage } = getState();

  const previousPage = currentPage - 1;
  const totalPages = Math.ceil(templates.length / pageLimit);

  const updateData = paginate(templates, previousPage);

  dispatch({
    type: PaginationActionTypes.LOAD_NEXT_PAGE,
    payload: {
      currentPage: previousPage,
      totalPages,
      filteredTemplates: updateData,
    },
  });
};

export const setTotalPages = (templates) => (dispatch) => {
  // const { currentPage } = getState().pagination;

  // const nextPage = currentPage + 1;
  // const previousPage = currentPage - 1;
  const totalPages = Math.ceil(templates.length / pageLimit);

  dispatch({
    type: PaginationActionTypes.SET_TOTAL_PAGES,
    payload: totalPages,
  });
};
