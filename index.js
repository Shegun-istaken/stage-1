const spanElement = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDate = new Date();
const currentDayIndex = currentDate.getDay();
const currentDayName = daysOfWeek[currentDayIndex];

spanElement.textContent = `The current Day of the Week: ${currentDayName}`;

const timeSpanElement = document.querySelector(
  '[data-testid="currentUTCTime"]'
);

const formatWithLeadingZero = (number) => {
  return number < 10 ? `0${number}` : `${number}`;
};

function updateTime() {
  let currentTime = new Date();
  const currentUTCHours = formatWithLeadingZero(currentTime.getUTCHours());
  const currentUTCMinutes = formatWithLeadingZero(currentTime.getUTCMinutes());
  const currentUTCSeconds = formatWithLeadingZero(currentTime.getUTCSeconds());
  return `Current UTC Time: ${currentUTCHours}:${currentUTCMinutes}:${currentUTCSeconds}`;
}

timeSpanElement.textContent = updateTime();
setInterval(() => {
  timeSpanElement.textContent = updateTime();
}, 1000);
