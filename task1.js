//TASK1 - BUTTON1 change the heading size

const btn1 = document
  .getElementById("btn1")
  .addEventListener("click", function () {
    document.querySelector("header").style.fontSize = "19px";
  });

//BUTTON2 change a paragraph font style

const btn2 = document
  .getElementById("btn2")
  .addEventListener("click", function () {
    document.getElementById("p1").style.fontStyle = "italic";
  });

//BUTTON3 highlight a paragraph

const btn3 = document
  .getElementById("btn3")
  .addEventListener("click", function () {
    document.getElementById("p3").style.background = "lightblue";
  });

//BUTTO4 hide an img

const btn4 = document
  .getElementById("btn4")
  .addEventListener("click", function () {
    document.getElementById("img1").style.display = "none";
  });

// BUTTON5 switch between images

const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const btn5 = document
  .getElementById("btn5")
  .addEventListener("click", function () {
    if (img2) {
      img2.src = "https://static.cdnlogo.com/logos/c/18/css.svg";
      img3.src =
        "https://itsaboutafshan.com/wp-content/uploads/2021/02/html-logo-png-2.png";
    }
  });

// TASK2 Change image when mouse over / return image back when mouse out

const img1 = document.getElementById("img1");
img1.addEventListener("mouseover", function () {
  img1.src =
    "https://camo.githubusercontent.com/57ddd3a62b96b7b46f5eb8af085beeae9f875a1b124c3075445c8234c2fbd6bc/68747470733a2f2f7261772e6769746875622e636f6d2f6a73636f6e662f6c6f676f2e6a732f6d61737465722f6a732e65752e706e67";
});
img1.addEventListener("mouseout", function () {
  img1.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png";
});

// TASK 3 Right click alert .... for image2

img2.addEventListener("contextmenu", function () {
  alert("this is html logo");
});

// TASK 4 fully loaded alert
onload = alert("Welcome to JS page ");

// TASK 5 Highlight all paragraphs when the mouse moves over them

const paAlert = document.querySelectorAll("p");
paAlert.forEach((ele) => {
  ele.addEventListener("mouseover", function () {
    ele.style.background = "bisque";
  }); // revert back them
  ele.addEventListener("mouseout", function () {
    ele.style.background = "none";
  });
});
