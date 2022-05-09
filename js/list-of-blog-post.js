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

const listPost = document.querySelector(".list-container");

async function listArticles() {
  try {
    const blogData = await apiCall(url);
    for (let i = 0; i < blogData.length; i++) {
      listPost.innerHTML += ` <div class="card"><a href="/blog-post-specific.html?id=${blogData[i].id}">
                                  <h2>${blogData[i].title.rendered}</h2>
                                  <button class="btn-readmore">Read more</button>
                                  <img src="${blogData[i].featured_media_src_url}" alt="" /></a>
                              </div>`;
    }
    console.log(blogData[i].title.rendered);
  } catch (e) {}
}

listArticles();


// loadmore api call -----------------------------

const loadMorebutton = document.querySelector(".load-more")
const loadMoreUrl = "https://beardland.hols.no/wp-json/wp/v2/posts/?per_page=14";
console.log(loadMoreUrl);

loadMorebutton.addEventListener("click",() =>{
  loadMore()
})


async function loadMore() {
  try {
    const blogData = await apiCall(loadMoreUrl);
for (let i = 10; i < blogData.length; i++) {
  const element = blogData[i];
  console.log(blogData[i])
  listPost.innerHTML += ` <div class="card"><a href="/blog-post-specific.html?id=${blogData[i].id}">
                                    <h2>${blogData[i].title.rendered}</h2>
                                    <button class="btn-readmore">Read more</button>
                                    <img src="${blogData[i].featured_media_src_url}" alt="" /></a>
                                </div>`

  loadMorebutton.style.display = "none"
}

  } catch (e) {

  }
}

