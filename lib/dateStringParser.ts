const parseDateStringIntoYYMMDD = (dateString: string) => {
  const parsedDate = new Date(dateString);
  const dateInYYYYMMDD = parseDateIntoYYYYMMDD(parsedDate);
  return dateInYYYYMMDD;
};

const parseDateStringIntoHHMM = (dateString: string) => {
  const parsedDate = new Date(dateString);
  const dateInHHMM = parseDateIntoHHMM(parsedDate);
  return dateInHHMM;
};

const parseDateIntoYYYYMMDD = (dateObj: Date) => {
  const yyyy = dateObj.getFullYear();
  const mm = dateObj.getMonth() + 1;
  const dd = dateObj.getDate();
  return `${yyyy}. ${mm}. ${dd}`;
};

const parseDateIntoHHMM = (dateObj: Date) => {
  const hh = dateObj.getHours();
  const mm = dateObj.getMinutes();
  return `${hh}:${mm}`;
};
export { parseDateStringIntoYYMMDD, parseDateStringIntoHHMM };
