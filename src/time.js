const clock = document.querySelector(".clock");
const greet = document.querySelector(".greet");

const handleTime = (time, num = 2) => {
  return String(Math.floor(time)).padStart(num, "0");
};

const getHours = () => {
  const getNow = new Date();
  return getNow.getHours();
};

const getMinutes = () => {
  const getNow = new Date();
  return getNow.getMinutes();
};

const handleClock = () => {
  return (clock.innerText = `${handleTime(getHours())}:${handleTime(
    getMinutes()
  )}`);
};

const handleGreetMessage = () => {
  const isMorning = 6 < getHours() && getHours() < 12;
  const isAfternoom = 12 < getHours() && getHours() < 18;

  if (isMorning) return "morning";
  if (isAfternoom) return "afternoon";
  else return "evening";
};

const handleGreet = () => {
  return (greet.innerText = `Good ${handleGreetMessage()}, here.`);
};

handleClock();
setInterval(handleClock, 1000);
handleGreet();
