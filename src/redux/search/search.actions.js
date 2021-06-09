import { SearchActionTypes } from './search.types';
import { sortAsc, sortByLatest, sortDesc, sortByOldest } from './search.utils';

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
      filterText,
      filteredTemplates,
    },
  });
};

export const sortByCategory = (category) => (dispatch, getState) => {
  const { templates } = getState();

  const filteredTemplates = templates.filter(
    (template) => template.category === category
  );

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

  let filteredTemplates;

  if (order === 'Default') {
    filteredTemplates = templates;
  } else if (order === 'Ascending') {
    sortAsc(templates, order);
  } else {
    sortDesc(templates, order);
  }

  dispatch({
    type: SearchActionTypes.SORT_BY_ORDER,
    payload: {
      order,
      filteredTemplates,
    },
  });
};

export const sortByDate = (date) => (dispatch, getState) => {
  const { templates } = getState().templates;

  let filteredTemplates;

  if (date === 'Default') {
    filteredTemplates = templates;
  } else if (date === 'Newest') {
    sortByLatest(templates);
  } else {
    sortByOldest(templates);
  }

  dispatch({
    type: SearchActionTypes.SORT_BY_DATE,
    payload: {
      date,
      filteredTemplates,
    },
  });
};
