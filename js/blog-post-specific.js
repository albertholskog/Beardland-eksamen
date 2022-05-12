// ---------------hamburger----------------
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header-nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((e) =>
  e.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
// --------function for henting av apiCall----------------
const url = "https://beardland.hols.no/wp-json/wp/v2/posts/";

async function apiCall(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {}
}

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");
const idPost = "https://beardland.hols.no/wp-json/wp/v2/posts/" + id;

const specContainer = document.querySelector(".specific-container");

async function articleSpesific() {
  try {
    const blogData = await apiCall(idPost);

    specContainer.innerHTML += `  <div class="spec-img-container">
                                    <img src="${blogData.featured_media_src_url}" alt="">
                                  </div>
                                  <div class= "spec-text">
                                    <h2>${blogData.title.rendered}</h2>
                                    <p>${blogData.acf.articles}</p>
                                  </div> 
                                  <div class="modal-container">
                                    <div class="modal">
                                      <img src="${blogData.featured_media_src_url}" alt="">
                                      <span class="close">&times;</span>
                                    </div>
                                  </div`;
  } catch (e) {}
  const modalContainer = document.querySelector(".modal-container");
  const imgaeContainer = document.querySelector(".spec-img-container");
  const closeBtn = document.querySelector(".close");

  imgaeContainer.addEventListener("click", () => {
    modalContainer.style.display = "block";
  });
  closeBtn.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });
  window.onclick = (e) => {
    if (e.target == modalContainer) {
      modalContainer.style.display = "none";
    }
  };
}
articleSpesific();

// // zoom in a imgae---------------------
