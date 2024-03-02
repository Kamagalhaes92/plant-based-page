function darkThemeButton() {
  console.log("Button clicked!");

  let body = document.querySelector("body");
  let backgroundImage = document.querySelector(".background-img");

  if (
    body.classList.contains("dark-mode") &&
    body.classList.contains("dark-style")
  ) {
    body.classList.remove("dark-mode", "dark-style");
  } else {
    body.classList.add("dark-mode", "dark-style");
  }

  backgroundImage.classList.toggle("dark-style");
}

let button = document.querySelector("#change-background-button");
button.addEventListener("click", darkThemeButton);
