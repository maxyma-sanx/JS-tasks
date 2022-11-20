//Необхідно додати потрібну логіку, щоб при кліку на одну з карток, вона ставала активною (у нас для цього єс active), а всі інші залишались/ставали неактивними
const container = document.querySelector(".container");
container.addEventListener("click", onContainerClick);

function onContainerClick(event) {
  const cards = document.querySelectorAll(".slide");
  cards.forEach((card) => {
    card.classList.remove("active");
  });
  event.target.classList.add("active");
}
