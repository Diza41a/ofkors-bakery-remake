import type { TFunction } from "i18next";
import type { DailyHours, HoursOfOperation } from "../../types/HoursOfOperation";
import type { TLanguage } from "../../translations";

const ORDERED_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as Array<keyof HoursOfOperation>;

const translateTimeToMilitary = (time: string): string => {
  const timeNoSpaces = time.replace(' ', '');
  const timeLowercase = timeNoSpaces.toLowerCase();

  const suffixIndex = Math.max(timeLowercase.indexOf('am'), timeLowercase.indexOf('pm'));
  const suffix = timeLowercase.substring(suffixIndex);
  const minutesIndex = timeLowercase.indexOf(':');
  let hours = parseInt(timeLowercase.substring(0, minutesIndex), 10);
  if (suffix === 'pm') hours += 12;
  const minutes = timeLowercase.substring(minutesIndex + 1, suffixIndex);

  return `${hours}:${minutes}`;
};
const getHoursString = (
  t: TFunction<'apis', undefined>,
  lang: TLanguage,
  dailyHours: DailyHours,
): string => {
  if (dailyHours.closed) return t('hours_of_operation:closed');

  const hoursFrom = lang === 'en' ? dailyHours.from : translateTimeToMilitary(dailyHours.from);
  const hoursTo = lang === 'en' ? dailyHours.to : translateTimeToMilitary(dailyHours.to);
  return `${hoursFrom} - ${hoursTo}`;
};
type DayInfo = {
  i: number;
  dayName: string;
  hours: string;
}
const aggregateDayInfo = (
  t: TFunction<'apis', undefined>,
  lang: TLanguage,
  orderedDayI: number,
  hoursOfOperation: HoursOfOperation,
): DayInfo => {
  const dayInfo = {
    i: orderedDayI,
    dayName: ORDERED_DAYS[orderedDayI],
    hours: getHoursString(t, lang, hoursOfOperation[ORDERED_DAYS[orderedDayI]]),
  };

  return dayInfo;
};
const generateHoursOfOperationString = (
  t: TFunction<'apis', undefined>,
  parentDayInfo: DayInfo,
  currDayInfo?: DayInfo
) => {
  const hours = parentDayInfo.hours;
  let daySubstring = '';
  if (currDayInfo) {
    const isParentDayUnique = currDayInfo.dayName === parentDayInfo.dayName;
    if (!isParentDayUnique) {
      const typedCurrDayName = currDayInfo.dayName as keyof HoursOfOperation;
      const translatedCurrDayName = t(`hours_of_operation:${typedCurrDayName}`);
      daySubstring += ` - ${translatedCurrDayName}`;
    }
  }
  const typedParentDayName = parentDayInfo.dayName as keyof HoursOfOperation;
  const translatedParentDayName = t(`hours_of_operation:${typedParentDayName}`);
  const dayString = `${translatedParentDayName}${daySubstring}`;
  const hoursOfOperationString = `${dayString}: ${hours}`;

  return hoursOfOperationString;
};
export const generateHoursOfOperationStrings = (
  t: TFunction<'apis', undefined>,
  lang: TLanguage,
  hoursOfOperation: HoursOfOperation,
): Array<string> => {
  const hoursOfOperationStrings: Array<string> = [];

  let currParentDayInfo: DayInfo | null = null;
  for (let i = 0; i < ORDERED_DAYS.length - 1; i += 1) {
    if (currParentDayInfo === null) {
      currParentDayInfo = aggregateDayInfo(t, lang, i, hoursOfOperation);
    };

    const currDayInfo = aggregateDayInfo(t, lang, i, hoursOfOperation);
    const nextDayInfo = aggregateDayInfo(t, lang, i + 1, hoursOfOperation);

    const isNextDayUnique = currDayInfo.hours !== nextDayInfo.hours;
    if (isNextDayUnique) {
      const hoursOfOperationString = generateHoursOfOperationString(
        t,
        currParentDayInfo,
        currDayInfo
      );
      hoursOfOperationStrings.push(hoursOfOperationString);
      currParentDayInfo = null;
    }

    const isNextDayLast = i + 1 === ORDERED_DAYS.length - 1;
    if (isNextDayLast) {
      const lastDayInfo = nextDayInfo;

      if (isNextDayUnique) {
        const hoursOfOperationString = generateHoursOfOperationString(t, lastDayInfo);
        hoursOfOperationStrings.push(hoursOfOperationString);
      } else {
        const hoursOfOperationString = generateHoursOfOperationString(
          t,
          currParentDayInfo!,
          lastDayInfo
        );
        hoursOfOperationStrings.push(hoursOfOperationString);
      }
    }
  }

  return hoursOfOperationStrings;
};
