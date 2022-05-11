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
    
    specContainer.innerHTML += `<div class="img-container"><img src="${blogData.featured_media_src_url}" alt=""></div>
                                  <div>
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
  const imgScale = document.querySelector(".img-container");
    imgScale.addEventListener("click", () => {
       imgScale.classList.add("img-scale");
    }); 
    window.addEventListener("click", () =>{
      imgScale.classList.remove("img-scale")
    })
  
}
articleSpesific();



// // zoom in a imgae---------------------
