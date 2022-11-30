let data = [
  {
    id: 1,
    imageUrl:
      "https://img.freepik.com/free-vector/autumn-realistic-background-theme_52683-44287.jpg",
    title: "slider title 1",
  },

  {
    id: 2,
    imageUrl:
      "https://pbs.twimg.com/media/FfIk6ESWQAI0nxH?format=jpg&name=large",
    title: "slider title 2",
  },

  {
    id: 3,
    imageUrl:
      "https://www.my1styears.com/blog/wp-content/uploads/2021/09/Blog-28_09-Banner-900x600.jpeg",
    title: "slider title 3",
  },
  {
    id: 4,
    imageUrl:
      "https://render.fineartamerica.com/images/rendered/default/print/8/5/break/images-medium-5/outem-park-michael-shabrin.jpg",
    title: "slider title 4",
  },
];

let arrowLeft = document.getElementById("arrow-left");
let arrowRight = document.getElementById("arrow-right");
let sliderContent = document.getElementById("slider-content");
let sliderIndex = 0;

// დივ ტეგი
function createDiveTag() {
  const divTag = document.createElement("div");
  divTag.classList.add("slide");

  return divTag;
}

// სურათი
// image-item რაც გვინდა იმას დავარქმევთ

function creteImgtag(image) {
  // let tagImage = document.createElement('img');
  // tagImage.setAttribute('src', image.imageUrl);
  // tagImage.setAttribute('alt', image.title);

  // bg.image
  let tagImage = document.createElement("div");
  tagImage.style.backgroundImage = `url(${image.imageUrl})`;
  tagImage.classList.add("bg-image");

  return tagImage;
}
// სათაური
function createTitletag(image) {
  let tagTitle = document.createElement("h3");
  tagTitle.textContent = image.title;

  return tagTitle;
}

// dot შექმნა
function createDots() {
  let dotsParent = document.createElement("div");
  dotsParent.classList.add("dotParent");

  data.forEach((element) => {
    let dot = document.createElement("div");
    dot.classList.add("dot");
    dotsParent.appendChild(dot);
  });

  return dotsParent;
}
function slide() {
  sliderContent.innerHTML = " ";
  let slideItem = createDiveTag(data[sliderIndex]);
  let imgTag = creteImgtag(data[sliderIndex]);
  let titleTag = createTitletag(data[sliderIndex]);
  let dotsElement = createDots();

  slideItem.appendChild(imgTag);
  slideItem.appendChild(titleTag);
  sliderContent.appendChild(slideItem);
  sliderContent.appendChild(dotsElement);
}
function arroLeftclick() {
  if (sliderIndex == 0) {
    // sliderIndex = data.length - 1;
    // slide()
    return;
  }
  sliderIndex--;
  slide();
}
function arrowRightclick() {
  if (sliderIndex == data.length - 1) {
    // sliderIndex = 0;
    // slide()
    return;
  }
  sliderIndex++;
  slide();
}

arrowLeft.addEventListener("click", arroLeftclick);

arrowRight.addEventListener("click", arrowRightclick);

setInterval(() => {
  arrowRightclick();
}, 3000);

slide();

// forms validation
let registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let errors = {};

  // username
  let usernameValue = document.getElementById("usernameField").value;
  if (usernameValue == "") {
    errors.username = "Username filed can not be empty";
  }

  // passvord

  let passwordValue = document.getElementById("passwordField").value;
  let passwordValue2 = document.getElementById("passwordFieldrepeat").value;

  if (passwordValue == "") {
    errors.password = "Password filed can not be empty";
  }

  if (passwordValue != passwordValue2) {
    errors.password2 = "Passwords do not match";
  }

  // checkbox

  let agreeField = document.getElementById("agreeTerms").checked;

  if (!agreeField) {
    errors.agree = "You must agree our terms and conditions";
  }

  console.log(errors);

  document.querySelectorAll(".error-text").forEach(item1=> {
    item1.innerText =" ";
  });

  for (let key in errors) {
    console.log(key);
    let spanText = document.getElementById('error_' + key);

    if (spanText) {
      spanText.innerText = errors[key];
    }
  }

  if(Object.keys(errors).length == 0){
    registrationForm.submit();
  }
});


