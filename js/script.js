// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".header-nav-menu");

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("active");
//   navMenu.classList.toggle("active");
// });

// document.querySelectorAll(".nav-link").forEach((e) =>
//   e.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
//   })
// );
// --------function for henting av apiCall----------------
const url = "https://beardland.hols.no/wp-json/wp/v2/posts/";

async function apiCall(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {}
}
// -------------------container for hovedsiden------------
const containerPrim = document.querySelector(".prim-container");
const containerSecondary = document.querySelector(".secondary-container");

// ------------main page call api----------------
async function htmlCreate() {
  try {
    const blogData = await apiCall(url);
    containerPrim.innerHTML += ` <div>
                                      <h2>${blogData[4].title.rendered}</h2>
                                      <p>${blogData[4].acf.articles}</p>
                                      <button class="btn-readmore">Read more</button>
                                  </div>
                                  <div class="img-container"><img src="${blogData[4].featured_media_src_url}" alt=""></div>`;
    containerSecondary.innerHTML += `
                                  <div class="img-container"><img src="${blogData[5].featured_media_src_url}" alt=""></div>
                                  <div>
                                      <h2>${blogData[5].title.rendered}</h2>
                                      <p>${blogData[5].acf.articles}</p>
                                      <button class="btn-readmore">Read more</button>
                                  </div>`;
  } catch (e) {}
}
htmlCreate();

// ------------ list articles page-------------------

const listPost = document.querySelector(".list-container");

async function listArticles() {
  try {
    const blogData = await apiCall(url);
    for (let i = 0; i < blogData.length; i++) {
      listPost.innerHTML += ` <div class="card"><a href="/blog-post-specific.html?id=${blogData[i].id}">
                                  <h2>${blogData[i].title.rendered}</h>
                                  <img src="${blogData[i].featured_media_src_url}" alt="" /></a>
                                  <button class="btn-readmore">Read more</button>
                              </div>`;
    }
  } catch (e) {}
}

listArticles();

// https://beardland.hols.no/wp-json/wp/v2/posts/<id>

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(params);

const id = params.get("id");
console.log(id);
const idPost = "https://beardland.hols.no/wp-json/wp/v2/posts/" + id;
console.log(idPost);

const specContainer = document.querySelector(".specific-container");

async function articleSpesific() {
  try {
    const blogData = await apiCall(idPost);
    console.log(blogData);
    specContainer.innerHTML += `<div><img src="${blogData.featured_media_src_url}" alt=""></div>
                                  <div>
                                  <h2>${blogData.title.rendered}</h2>
                                  <p>${blogData.acf.articles}</p>
                                  </div> `;
  } catch (e) {}
}
articleSpesific();
