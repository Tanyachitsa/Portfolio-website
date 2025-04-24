let button = document.getElementsByClassName("contact-button")[0];
button.addEventListener("click", toggleDetails);

function toggleDetails() {
  const details = document.getElementById("details");
  const isVisible = details.style.display === "block";
  details.style.display = isVisible ? "none" : "block";
}
