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
// -------------------container for hovedsiden------------
const containerPrim = document.querySelector(".prim-container");
const containerSecondary = document.querySelector(".secondary-container");

// ------------main page call api----------------
async function htmlCreate() {
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
}
htmlCreate();

// async function createList() {
//   const blogData = await apiCall(url);
//   for (let i = 2; i < blogData.length; i++) {
//     console.log(blogData[i]);
//     listPost.innerHTML += `<div class="card">
//                                 <h2>${blogData[i].title.rendered}</h>
//                                 <img src="${blogData[i].featured_media_src_url}" alt="" />
//                                  <button class="btn-readmore">Read more</button>
//                             </div>
//                             <div class="card">
//                                 <h2>${blogData[i].title.rendered}</h>
//                                 <img src="${blogData[i].featured_media_src_url}" alt="" />
//                                  <button class="btn-readmore">Read more</button>
//                             </div><div class="card">
//                                 <h2>${blogData[i].title.rendered}</h>
//                                 <img src="${blogData[i].featured_media_src_url}" alt="" />
//                                 <button class="btn-readmore">Read more</button>
//                            </div>`;
//   }
// }
// createList();
// const listPost = document.querySelector(".list-container");

// async function createList() {
//   const apiData = await apiCall(url);

//   for (let i = 1; i < apiData.length; i++) {
//     // const element = apiData[i];
//     console.log(i);

//     for (let j = 2; j < apiData.length; j++) {
//       // const element = apiData[j];
//       console.log(j);
//       console.log("hei");
//     }
//   }
// }

// createList();

// async function callApi() {

//     try {
//         const blogResponse = await fetch(url);
//         const blogdata = await blogResponse.json();
//         console.log(blogdata[0]);

//           console.log(blogdata[0].title.rendered)
//           containerSecondary.innerHTML += `
//           <div class="img-container"><img src="${blogdata[0].featured_media_src_url}" alt=""></div>
//           <div>
//           <h2>${blogdata[0].title.rendered}</h2>
//           <p>${blogdata[0].acf.articles}</p>
//           <button class="btn-readmore">Read more</button>
//           </div>`;

//     } catch (e) {}
// }

// callApi();
