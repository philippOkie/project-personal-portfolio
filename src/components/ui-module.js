export const r = document.querySelector(":root");
export const themeBtn = document.getElementById("themeBtn");
export function changeTheme() {
  if (getComputedStyle(r).getPropertyValue("--main-color") == "#c6c5b9") {
    r.style.setProperty("--main-box-bgclr", "#c6c5b9");
    r.style.setProperty("--main-color", "#393d3f");
    localStorage.setItem("--main-box-bgclr", "#c6c5b9");
    localStorage.setItem("--main-color", "#393d3f");
  } else if (
    getComputedStyle(r).getPropertyValue("--main-color") != "#c6c5b9"
  ) {
    r.style.setProperty("--main-box-bgclr", "#fdfdff");
    r.style.setProperty("--main-color", "#c6c5b9");
    localStorage.setItem("--main-box-bgclr", "#fdfdff");
    localStorage.setItem("--main-color", "#c6c5b9");
  }
}
