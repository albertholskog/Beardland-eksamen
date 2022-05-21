export const url = "https://beardland.hols.no/wp-json/wp/v2/posts/?per_page=10";

export async function apiCall(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {}
}

export const loaderContainer = document.querySelector(".loader");
