export const getYearOptions = () => {
  const startYear = 1995;
  const endYear = 2023;
  const years = [];

  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }

  return years;
};
