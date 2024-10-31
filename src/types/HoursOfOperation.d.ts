export type DailyHours = {
  from: string;
  to: string;
  closed: boolean;
}

export interface HoursOfOperation {
  Monday: DailyHours;
  Tuesday: DailyHours;
  Wednesday: DailyHours;
  Thursday: DailyHours;
  Friday: DailyHours;
  Saturday: DailyHours;
  Sunday: DailyHours;
}
