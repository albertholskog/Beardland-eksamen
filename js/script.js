// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".header-nav-menu");

// hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// });

// document.querySelectorAll(".nav-link").forEach((e) =>
//     e.addEventListener("click", () => {
//         hamburger.classList.remove("active");
//         navMenu.classList.remove("active");
//     })
// );

// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);

// console.log(params);

// const id = params.get("id");
// console.log(id)
//  const idName = id.slice(0, -1);
//  console.log(idName);

const url = "https://beardland.hols.no/wp-json/wp/v2/posts/";
const containerSecondary = document.querySelector(".secondary-container");

async function apiCall(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (e) {}
}




async function htmlCreate() {
  const blogData = await apiCall(url);
    containerSecondary.innerHTML += `
  <div class="img-container"><img src="${blogData[0].featured_media_src_url}" alt=""></div>
  <div>
  <h2>${blogData[0].title.rendered}</h2>
  <p>${blogData[0].acf.articles}</p>
  <button class="btn-readmore">Read more</button>
  </div>`;
}
htmlCreate();

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
