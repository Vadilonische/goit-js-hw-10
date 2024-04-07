import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const input = e.currentTarget.elements.delay.value;

  const radio = e.currentTarget.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (radio === 'fulfilled') {
        resolve();
      } else {
        reject();
      }
    }, input);
  });
  promise
    .then(value => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${input}ms`,
        position: 'topRight',
      });
    })
    .catch(error => {
      iziToast.error({
        message: `❌ Rejected promise in ${input}ms`,
        position: 'topRight',
      });
    });
});
