let data = [
  {
    id: 1,
    imageUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300",
    title: "slider title 1",
  },

  {
    id: 2,
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    title: "slider title 2",
  },

  {
    id: 3,
    imageUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300",
    title: "slider title 3",
  },
  {
    id: 4,
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    title: "slider title 4",
  },
];

let arrowLeft = document.getElementById("arrow-left");
let arrowRight = document.getElementById("arrow-right");
let sliderContent = document.getElementById("slider-content");
let sliderIndex = 0;

// დივ ტეგი
function createDiveTag(){
const divTag = document.createElement('div');
divTag.classList.add('slide');

return divTag;
}

// სურათი
// image-item რაც გვინდა იმას დავარქმევთ

function creteImgtag (image) {
    // let tagImage = document.createElement('img');
    // tagImage.setAttribute('src', image.imageUrl);
    // tagImage.setAttribute('alt', image.title);

    // bg.image
    let tagImage = document.createElement('div');
    tagImage.style.backgroundImage = `url(${image.imageUrl})`;
    tagImage.classList.add('bg-image');


    return tagImage;
}
// სათაური
function createTitletag(image){
    let tagTitle = document.createElement('h3');
    tagTitle.textContent = image.title;

    return tagTitle;
}

// dot შექმნა
function createDots(){
    let dotsParent = document.createElement('div');
    dotsParent.classList.add('dotParent');

    data.forEach(element =>{
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dotsParent.appendChild(dot);
    })

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
    if (sliderIndex == 0){
        // sliderIndex = data.length - 1;
        // slide()
        return;
    }
    sliderIndex--;
    slide();
}
function arrowRightclick(){
    if(sliderIndex == data.length -1){
        // sliderIndex = 0;
        // slide()
        return;
    }
    sliderIndex++;
    slide();
}

arrowLeft.addEventListener('click',arroLeftclick);


arrowRight.addEventListener('click', arrowRightclick);

setInterval( () => {
    arrowRightclick()
},3000

)

slide();

