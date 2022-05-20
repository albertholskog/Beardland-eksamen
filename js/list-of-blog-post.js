import { url } from "./component.js";
import { apiCall } from "./component.js";

const listPost = document.querySelector(".list-container");

async function listArticles() {
  try {
    listPost.innerHTML = "";
    const blogData = await apiCall(url);
    for (let i = 0; i < blogData.length; i++) {
      listPost.innerHTML += ` <div class="card"><a href="/blog-post-specific.html?id=${blogData[i].id}">
                                  <h2>${blogData[i].title.rendered}</h2>
                                  <img src="${blogData[i].featured_media_src_url}" alt="${blogData[i].acf.alt}" />
                                  <button class="btn-readmore-list">Read more</button></a>
                              </div>`;
    }
  } catch (e) {
    listPost.innerHTML = `<p class ="catch-err">
    Error could not connect to api, try to refresh this page</p> `;
  }
}

listArticles();

// loadmore api call -----------------------------

const loadMorebutton = document.querySelector(".load-more");
const loadMoreUrl =
  "https://beardland.hols.no/wp-json/wp/v2/posts/?per_page=14";

loadMorebutton.addEventListener("click", () => {
  loadMore();
});

async function loadMore() {
  try {
    const blogData = await apiCall(loadMoreUrl);
    for (let i = 10; i < blogData.length; i++) {
      listPost.innerHTML += ` <div class="card"><a href="/blog-post-specific.html?id=${blogData[i].id}">
                                    <h2>${blogData[i].title.rendered}</h2>
                                    <img src="${blogData[i].featured_media_src_url}" alt="${blogData[i].acf.alt}" />
                                    <button class="btn-readmore-list">Read more</button></a>
                                </div>`;

      loadMorebutton.style.display = "none";
    }
  } catch (e) {
    listPost.innerHTML = `<p class ="catch-err">
    Error could not connect to api, try to refresh this page</p> `;
  }
}

const filterTipsUrl =
  "https://beardland.hols.no/wp-json/wp/v2/posts/?categories=6";
const filterGuideUrl =
  "https://beardland.hols.no/wp-json/wp/v2/posts/?categories=4";
const filterProductUrl =
  "https://beardland.hols.no/wp-json/wp/v2/posts/?categories=5";

const filterButtonTips = document.querySelector(".btn-filter-tips");
const filterButtonGuide = document.querySelector(".btn-filter-guide");
const filterButtonProduct = document.querySelector(".btn-filter-product");

filterButtonTips.addEventListener("click", () => {
  updateFilterTips();
});
filterButtonGuide.addEventListener("click", () => {
  updateFilterTips();
});
filterButtonProduct.addEventListener("click", () => {
  updateFilterTips();
});

async function updateFilterTips() {
  try {
    const blogData = await apiCall(filterTipsUrl);
    test();
    // listPost.innerHTML = "";
    // for (let i = 0; i < blogData.length; i++) {
    //   const element = blogData[i];
    //   console.log(element);
    //   listPost.innerHTML += ` <div class="card"><a href="/blog-post-specific.html?id=${blogData[i].id}">
    //                             <h2>${blogData[i].title.rendered}</h2>
    //                             <img src="${blogData[i].featured_media_src_url}" alt="${blogData[i].acf.alt}" />
    //                             <button class="btn-readmore-list">Read more</button></a>
    //                         </div>`;

    //   loadMorebutton.style.display = "none";
  } catch (e) {}
}

async function test() {
  try {
    listPost.innerHTML = "";
    for (let i = 0; i < blogData.length; i++) {
      const element = blogData[i];
      console.log(element);
      listPost.innerHTML += ` <div class="card"><a href="/blog-post-specific.html?id=${blogData[i].id}">
                                <h2>${blogData[i].title.rendered}</h2>
                                <img src="${blogData[i].featured_media_src_url}" alt="${blogData[i].acf.alt}" />
                                <button class="btn-readmore-list">Read more</button></a>
                            </div>`;

      loadMorebutton.style.display = "none";
    }
  } catch (e) {}
}
