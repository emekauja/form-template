export const sortAsc = (templates, field) => {
  return templates.slice().sort((a, b) => {
    if (a[field] > b[field]) {
      return 1;
    }
    if (b[field] > a[field]) {
      return -1;
    }
    return 0;
  });
};

export const sortDesc = (templates, field) => {
  return templates.slice().sort((a, b) => {
    if (a[field] > b[field]) {
      return -1;
    }
    if (b[field] > a[field]) {
      return 1;
    }
    return 0;
  });
};

export const sortByLatest = (templates) => {
  const filteredByDateCreated = templates.slice().sort((a, b) => {
    let firstDate = new Date(a.created);
    let secondDate = new Date(b.created);

    return secondDate - firstDate;
  });
  return filteredByDateCreated;
};

export const sortByOldest = (templates) => {
  const filteredByDateCreated = templates.slice().sort((a, b) => {
    let firstDate = new Date(a.created);
    let secondDate = new Date(b.created);

    return firstDate - secondDate;
  });
  return filteredByDateCreated;
};
