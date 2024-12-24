export const selectToString = (item: string[]) => {
  return item.join(",");
};

export const stringToSelect = (item: string) => {
  return item.split(",");
};
