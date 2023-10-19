import "./styles/main.scss";

const getEmailBtn = document.getElementById("getEmailBtn");
const myEmail = "kriukphilipp@gmail.com";
const textArea = document.createElement("textarea");

getEmailBtn.addEventListener("click", () => {
  textArea.value = myEmail;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
});
