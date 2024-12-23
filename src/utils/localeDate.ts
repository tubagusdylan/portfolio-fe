const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const localeDate = (date: string) => {
  return new Date(date).toLocaleDateString("id-ID", options);
};
