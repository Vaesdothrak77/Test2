document.addEventListener("DOMContentLoaded", function () {
  const mySwiper = new Swiper(".swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    pagination: false,
  });
});

function openModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target === modal) {
    closeModal();
  }
};

const reservationForm = document.getElementById("reservationForm");
reservationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(reservationForm);

  fetch("URL_СЕРВЕРА", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === "success") {
        closeModal();
      }
    })
    .catch((error) => {
      console.error("Ошибка при отправке формы:", error);
    });
});
