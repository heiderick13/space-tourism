const items = document.querySelectorAll(".item");
const controls = document.querySelectorAll(".control");
const destinations = document.querySelectorAll(".destination");
const maxItems = items.length;

let currentItem = 0;

controls.forEach((control) => {
  control.addEventListener("click", () => {
    const isLeft = control.classList.contains("left");

    console.log(control, currentItem, isLeft);

    if (isLeft) {
      currentItem--;
    } else {
      currentItem++;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items[currentItem].scrollIntoView({
      inline: "center",
      behavior: "smooth",
    });

    destinations.forEach((destination) => {
      destination.classList.remove("active");
    });

    destinations[currentItem].classList.add("active");
  });
});
