const Iloveyoutoo = document.getElementById('button1');
Iloveyoutoo.addEventListener('click', function() {
    const storedName = localStorage.getItem("name");

    if (storedName && ["Kylie", "Lie", "kylie", "lie"].includes(storedName)) {
      alert('I LOVE YOU TOO');
    } else {
      alert('Who the fuck are you?');
    }
  });

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/bebu.jpg") {
    myImage.setAttribute("src", "images/bebu2.jpg");
  } else {
    myImage.setAttribute("src", "images/bebu.jpg");
  }
};

let myButton = document.querySelector("#button3");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Do you know who my love is, ${myName}?`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Do you know who my love is, ${storedName}?`;
}

myButton.onclick = () => {
  setUserName();
};