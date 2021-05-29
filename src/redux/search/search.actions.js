import { SearchActionTypes } from './search.types';
import { sortAsc, sortByLatest, sortDesc } from './search.utils';

export const filterByText = (filterText) => (dispatch, getState) => {
  const { templates } = getState();

  const filteredTemplates = templates.filter((template) => {
    const regex = new RegExp(`${filterText}`, 'gi');
    const nameMatch = template.name.match(regex);
    const descriptionMatch = template.description.match(regex);

    return nameMatch || descriptionMatch;
  });

  dispatch({
    type: SearchActionTypes.SORT_BY_CATEGORY,
    payload: {
      filterByText,
      filteredTemplates,
    },
  });
};

export const sortByCategory = (category) => (dispatch, getState) => {
  const { templates } = getState();

  const filteredTemplates = templates.filter((template) => {
    return template.category === category;
  });

  dispatch({
    type: SearchActionTypes.SORT_BY_CATEGORY,
    payload: {
      category,
      filteredTemplates,
    },
  });
};

export const sortByOrder = (order) => (dispatch, getState) => {
  const { templates } = getState();

  const filteredTemplates =
    order === 'Default'
      ? templates
      : order === 'Asc'
      ? sortAsc(templates, order)
      : sortDesc(templates, order);

  dispatch({
    type: SearchActionTypes.SORT_BY_ORDER,
    payload: {
      order,
      filteredTemplates,
    },
  });
};

export const sortByDate = (date) => (dispatch, getState) => {
  const { templates } = getState();

  const filteredTemplates =
    date === 'Default'
      ? templates
      : date === 'Newest'
      ? sortByLatest(templates)
      : sortByOldest(templates);

  dispatch({
    type: SearchActionTypes.SORT_BY_DATE,
    payload: {
      date,
      filteredTemplates,
    },
  });
};
