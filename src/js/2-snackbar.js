
// Import iziToast and its styles
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const handleSubmit = (event) => {
  event.preventDefault();

  const delay = parseInt(document.querySelector('input[name="delay"]').value);
  const state = document.querySelector('input[name="state"]:checked').value;

  const notificationPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  notificationPromise
    .then((delay) => {
      iziToast.success({
        title: "Success",
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: "Error",
        message: `❌ Rejected promise in ${delay}ms`,
      });
    })
    .finally(() => {
      // Reset the form after submission
      event.currentTarget.reset();
    });
};

document.querySelector('.form').addEventListener('submit', handleSubmit);
