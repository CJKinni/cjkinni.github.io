const btn = document.querySelector(".dark-switch");
const prefersdarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// We also set the button text to the opposite of our preference
if (prefersdarkScheme.matches) {
  btn.text = "light";
} else {
  btn.text = "dark";
}

// We keep a localStorage item so people can keep their theme preference.
// If we have a currentTheme already set, we apply it and use its btn.text
let currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
  btn.text = "light";
} else if (currentTheme == "light") {
  document.body.classList.add("light-theme");
  btn.text = "dark";
}

btn.addEventListener("click", function () {
  if (prefersdarkScheme.matches) {
    // We remove the theme we aren't toggling to support changing themes
    // during browsing.
    document.body.classList.remove("dark-theme");
    document.body.classList.toggle("light-theme");
  } else {
    document.body.classList.remove("light-theme");
    document.body.classList.toggle("dark-theme");
  }

  // Once they've toggled their theme, figure out what it is, and save it
  // for next itme.
  if (document.body.classList.contains("light-theme")) {
    currentTheme = "light";
  } else {
    currentTheme = "dark";
  }

  localStorage.setItem("theme", currentTheme);
  // Set the button to the opposite of our current theme.
  btn.text = currentTheme == "light" ? "dark" : "light";
});