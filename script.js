var isStatus = document.querySelector("h2");
console.log(isStatus);

var btn = document.querySelector("#add");
var check = 0;
btn.addEventListener("click", function () {
  if (check == 0) {
    isStatus.innerHTML = "Friend";
    isStatus.style.color = "green";
    btn.innerHTML = "remove";
    check = 1;
  } else {
  }
  isStatus.innerHTML = "Stranger";
  isStatus.style.color = "red";
  btn.innerHTML = "add";
  check = 0;
});
