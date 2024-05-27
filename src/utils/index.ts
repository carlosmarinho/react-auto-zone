export const getYearOptions = () => {
  const startYear = 1995;
  const endYear = 2023;
  const years = [];

  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }

  return years;
};

export const processVehicleData = <T extends unknown>(
  data: T[] | undefined,
  idSelector: (item: T) => number,
  nameSelector: (item: T) => string
) => {
  return (
    data
      ?.map((item) => ({ id: idSelector(item), name: nameSelector(item) }))
      .sort((a, b) => a.name.localeCompare(b.name))
      .reduce(
        (
          acc: { id: number; name: string }[],
          current: { id: number; name: string }
        ) => {
          const x = acc.find((item) => item.id === current.id);
          if (!x) {
            return acc.concat([current]);
          } else {
            return acc;
          }
        },
        []
      ) || []
  );
};
