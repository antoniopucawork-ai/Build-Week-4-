const MONTHS = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

export const formatExperienceDate = (date) => {
  if (!date) return "";

  const [year, month] = date.split("-");

  return `${MONTHS[Number(month) - 1]} ${year}`;
};