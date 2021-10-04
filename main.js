let launchDate = new Date("Oct 20, 2021, 00:00:00").getTime();

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const dayValue = document.querySelector(".counter .unit-container .day");
const hourValue = document.querySelector(".counter .unit-container .hour");
const minuteValue = document.querySelector(".counter .unit-container .minute");
const secondValue = document.querySelector(".counter .unit-container .second");

const counter = document.querySelector(".counter");
const subHeading = document.querySelector(".my-container .right p");

const updateCounter = () => {
  let now = new Date().getTime();
  let gap = launchDate - now;

  dayValue.innerHTML = ("0" + Math.floor(gap / day)).slice(-2);
  hourValue.innerHTML = ("0" + Math.floor((gap % day) / hour)).slice(-2);
  minuteValue.innerHTML = ("0" + Math.floor((gap % hour) / minute)).slice(-2);
  secondValue.innerHTML = ("0" + Math.floor((gap % minute) / second)).slice(-2);

  if (gap < 0) {
    counter.style.display = "none";
    subHeading.innerHTML = "Hi, please stay tuned for some awesome features";
  }
};

updateCounter();

setInterval(updateCounter, 1000);
