let button = document.getElementById("chat");
button.addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("chat-window-img").classList.toggle("invisible");
});
