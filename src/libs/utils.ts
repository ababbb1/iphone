export const getItemsFromDateObject = (_date: Date) => {
  const today = new Date();
  const _year = _date.getFullYear();
  const _hours = _date.getHours();
  const _minutes = _date.getMinutes();
  const withZero = (i: number): string => (i < 10 ? `0${i}` : i.toString());
  const ampm =
    _hours > 12
      ? `PM ${withZero(_hours - 12)}:${withZero(_minutes)}`
      : `AM ${withZero(_hours)}:${withZero(_minutes)}`;
  const ampmKor =
    _hours > 12
      ? `오후 ${withZero(_hours - 12)}:${withZero(_minutes)}`
      : `오전 ${withZero(_hours)}:${withZero(_minutes)}`;
  const weekdays = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const weekdaysKor = ["일", "월", "화", "수", "목", "금", "토"];

  return {
    year: _year,
    month: _date.getMonth() + 1,
    date: _date.getDate(),
    hours: _hours,
    hoursWithZero: withZero(_hours),
    minutes: _minutes,
    minutesWithZero: withZero(_minutes),
    seconds: _date.getSeconds(),
    ampm,
    ampmKor,
    weekday: weekdays[_date.getDay()],
    weekdayKor: weekdaysKor[_date.getDay()],
  };
};
