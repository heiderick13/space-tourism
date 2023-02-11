const controls = document.querySelectorAll("#techs-carousel .control");
const items = document.querySelectorAll("#carousel-items .item");
const indicators = document.querySelectorAll("#indicators a");
const maxItems = items.length;

let current = 0;

controls.forEach((control) => {
  control.addEventListener("click", () => {
    let isLeft = control.classList.contains("left");

    if (isLeft) {
      current--;
    } else {
      current++;
    }

    if (current >= maxItems) {
      current = 0;
    }

    if (current < 0) {
      current = maxItems - 1;
    }

    items[current].scrollIntoView({
      inline: "center",
      behavior: "smooth",
    });

    indicators.forEach((indicator) => {
      indicator.classList.remove("active");
    });

    indicators[current].classList.add("active");
  });
});
