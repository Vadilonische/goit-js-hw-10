import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const dateTimePicker = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('button');
const timerValue = document.querySelectorAll('.value');

buttonStart.disabled = true;
dateTimePicker.disabled = false;

let userSelectedDate;

function showError(message) {
  iziToast.error({
    title: 'Error',
    message,
    position: 'topCenter',
  });
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate < options.defaultDate) {
      showError('Please choose a date in the future');
      buttonStart.disabled = true;
    } else {
      buttonStart.disabled = false;
      dateTimePicker.disabled = true;
    }
  },
};

const calendar = flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

buttonStart.addEventListener('click', handleBtn);

function handleBtn() {
  buttonStart.disabled = true;
  dateTimePicker.disabled = true;

  const intervalID = setInterval(() => {
    const currentTime = new Date();
    const diff = userSelectedDate - currentTime;
    if (diff < 1) {
      clearInterval(intervalID);
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(diff);

    timerValue[0].textContent = addLeadingZero(days);
    timerValue[1].textContent = addLeadingZero(hours);
    timerValue[2].textContent = addLeadingZero(minutes);
    timerValue[3].textContent = addLeadingZero(seconds);
  }, 1000);
}
