// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

import izitoast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const datePickerInput = document.querySelector('input[id="datetime-picker"]');
const startBtn = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

let userSelectedDate = null;
startBtn.disabled = true;
let timeDeadline = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      izitoast.error({ position: 'topRight', message: 'Please choose a date in the future',});
    } else {
      startBtn.disabled = false;
      timeDeadline = selectedDates[0];
    }
  },
};

flatpickr(datePickerInput, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

startBtn.addEventListener('click', onStart);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function onStart() {
  startBtn.disabled = true;
  datePickerInput.disabled = true;
  const startTime = Date.now();

  userSelectedDate = setInterval(() => {
    const currentTime = Date.now();
    let diff = timeDeadline - currentTime;

    if (diff >= 0) {
      let time = convertMs(diff);

      days.textContent = addLeadingZero(time.days);
      hours.textContent = addLeadingZero(time.hours);
      minutes.textContent = addLeadingZero(time.minutes);
      seconds.textContent = addLeadingZero(time.seconds);
    } else {
      izitoast.show({
        message: 'CountDown finished',
        messageColor: '#f44566',
        messageSize: '18px',
        backgroundColor: '#ffffff',
        position: 'topRight',
        timeout: 1000, 
      });
      clearInterval(userSelectedDate);
    }
  }, 1000);
}
