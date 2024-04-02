const WRAPPER = document.querySelector(".wrapper");
let previous = "";
WRAPPER.addEventListener("click", function(event) {
  if (event.target.classList.contains("question")) {
    const container = event.target.parentElement;
    container.classList.toggle("active");
    if(previous != ""){
      previous.classList.toggle("active");
    }
    previous = container;
  }
});
