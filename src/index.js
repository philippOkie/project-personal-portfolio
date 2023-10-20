import "./styles/main.scss";
import { changeTheme, themeBtn, r } from "./components/ui-module";

const getEmailBtn = document.getElementById("getEmailBtn");
const textArea = document.createElement("textarea");
const myEmail = "kriukphilipp@gmail.com";

getEmailBtn.addEventListener("click", () => {
  textArea.value = myEmail;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
});

themeBtn.addEventListener("click", () => {
  changeTheme();
});

window.onload = () => {
  r.style.setProperty("--main-color", localStorage.getItem("--main-color"));
  r.style.setProperty(
    "--main-box-bgclr",
    localStorage.getItem("--main-box-bgclr")
  );
};
