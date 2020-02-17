const YYYYMMDDParser = (dateObj: Date) => {
  const yyyy = dateObj.getFullYear().toString();
  const mm = dateObj.getMonth().toString();
  const dd = dateObj.getDate().toString();
  return `${yyyy}. ${mm}. ${dd}`;
};

const HHMMParser = (dateObj: Date) => {
  const hh = dateObj.getHours().toString();
  const mm = dateObj.getMinutes().toString();
  return `${hh}:${mm}`;
};

const dateStringParserInYYYYMMDD = (dateString: string) => {
  const parsedDate = new Date(dateString);
  const dateInYYYYMMDD = YYYYMMDDParser(parsedDate);
  return dateInYYYYMMDD;
};

const dateStringParserInHHMM = (dateString: string) => {
  const parsedDate = new Date(dateString);
  const dateInHHMM = HHMMParser(parsedDate);
  return dateInHHMM;
};

export { dateStringParserInYYYYMMDD, dateStringParserInHHMM };
