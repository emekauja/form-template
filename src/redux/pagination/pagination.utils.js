export const pageLimit = 15;

export const paginate = (templates) => {
  const lowerCount = (1 - 1) * pageLimit;
  const upperCount = pageLimit * 1;

  return templates.slice(lowerCount, upperCount);
};
