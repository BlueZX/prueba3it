import 'dayjs/locale/es';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocal from 'dayjs/plugin/updateLocale';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(updateLocal);
dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);
dayjs.locale('es');

const now = dayjs();

export const urlDays = (days: number) => {
  const url = now.subtract(days, 'day')
    .format('YYYY/MM')
    .toString();
  
  const day = now.subtract(days, 'day')
    .format('DD')
    .toString();
  return `${url}/dias/${day}`;
};

export const urlMonth = (months: number) => {
    return now.subtract(months, 'month')
    .format('YYYY/MM')
    .toString();;
};

export const getYearMonth = (months: number) => {
    const newDate = now.subtract(months, 'month')
      .format('YYYY/MM')
      .toString();

    return newDate;
};

export const getYear = () => now.format('YYYY');