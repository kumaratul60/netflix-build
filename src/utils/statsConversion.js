export const minutesToHours = (minutes) => {
  const hours = minutes / 60;
  return hours;
};

export const formatNumberWithSuffix1 = (number) => {
  const THOUSAND = 1000;
  const MILLION = THOUSAND * 1000;
  const BILLION = MILLION * 1000;

  if (number >= BILLION) {
    return (number / BILLION).toFixed(1) + "B";
  } else if (number >= MILLION) {
    return (number / MILLION).toFixed(1) + "M";
  } else if (number >= THOUSAND) {
    return (number / THOUSAND).toFixed(1) + "K";
  } else {
    return number.toString();
  }
};

export const formatNumberWithSuffix = (number) => {
  const suffixes = ["", "K", "M", "B"];
  const THOUSAND = 1000;

  let index = 0;
  while (number >= THOUSAND && index < suffixes.length - 1) {
    number /= THOUSAND;
    index++;
  }

  return number.toFixed(1) + suffixes[index];
};
