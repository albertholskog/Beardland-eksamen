// denne skal legges i en import i en annen fil

const url = "https://beardland.hols.no/wp-json/wp/v2/posts/";

async function apiCall(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {}
}
// --------------------------------
const carouselContainer = document.querySelector(".carousel-container");

async function carouselPostApiCall() {
  try {
    const blogData = await apiCall(url);
    for (let i = 0; i < blogData.length; i++) {
      if (i === 4) {
        carouselContainer.innerHTML += `<div class="carousel-post carousel-post-visible">
                                                    <img src="${blogData[i].featured_media_src_url}" alt="" />
                                                    <h2 class="carousel-title">${blogData[i].title.rendered}</h2>
                                              </div>`;
      }
      console.log(blogData[i]);
    }
  } catch (e) {}
}
carouselPostApiCall();

let slidePos = 0;
const slides = document.querySelectorAll(".carousel-post");
const totalSlides = slides.length;
const leftButton = document.querySelector(".carousel-button-left");
const rightButton = document.querySelector(".carousel-button-right");

leftButton.addEventListener("click", () => {
  prevSlide();
});
rightButton.addEventListener("click", () => {
  nextSlide();
});

const updateSlides = () => {
  for (let i = 0; i < slides.length; i++) {
    const slideArr = slides[i];
    slideArr.classList.remove("carousel-post-visible");
    slideArr.classList.add("carousel-post-hidden");
  }
  slides[slidePos].classList.add("carousel-post-visible");
};

const nextSlide = () => {
  if (slidePos === totalSlides - 1) {
    slidePos = 0;
  } else {
    slidePos++;
  }
  updateSlides();
};

const prevSlide = () => {
  if (slidePos === 0) {
    slidePos = totalSlides - 1;
  } else {
    slidePos--;
  }
  updateSlides();
};

// setInterval(() => {
//   nextSlide();
// }, 7000);
