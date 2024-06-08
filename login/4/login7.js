let input = document.querySelector(".input");
let password = document.querySelector(".password");
let mymodal = document.querySelector(".modal");
let mytitle = document.querySelector("#title");
let erorpart = document.querySelector(".eror");
let erorpart2 = document.querySelector(".eror2");
function login() {
  let inputvalue = input.value;
  let passwordvalue = password.value;
  if (inputvalue.length >= 12 && passwordvalue.length >= 8) {
    mymodal.style.display = "block";

    mytitle.innerHTML = "your login sucssasful!!!";
  } else {
    mymodal.style.display = "block";

    mytitle.innerHTML = "your value is not coract";
  }

  setTimeout(function () {
    mymodal.style.display = "none";
  }, 3000);
}

function eror() {
  if (input.value.length >= 12) {
    erorpart.style.display = "none";
  } else if (input.value.length <= 12) {
    erorpart.style.display = "block";
  }
}

function eror2() {
  let passwordvalue = password.value;
  if (passwordvalue.length >= 8) {
    erorpart2.style.display = "none";
  } else if (passwordvalue.length <= 8) {
    erorpart2.style.display = "block";
  }
}
