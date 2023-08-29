export const getDateFormat = (date: Date) => {
  const currentDate = new Date(date);
  return `${currentDate.toLocaleDateString('en-GB')}`;
};