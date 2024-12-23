export const getTableNumber = (index: number, page: number, size: number) => {
  return `${index + 1 + (page - 1) * size}.`;
};
