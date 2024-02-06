const text = document.getElementById("content");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Freelancer"
  }, 0);
  setTimeout(() => {
    text.textContent = "Front-End Developer"
  }, 4000);
  setTimeout(() => {
    text.textContent = "Video Creator"
  }, 8000);
  setTimeout(() => {
    text.textContent = "Creator"
  }, 12000);
}

textLoad();
setInterval(textLoad, 14000)



