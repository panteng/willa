import "normalize.css";
import "./style.scss";
import images from "./img/img";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

window.onload = () => {
  const galleryEl = document.querySelector(".gallery");

  const imagesHTMLStr = images
    .map(imgSrc => {
      return `<div class="photo"><img src="${imgSrc}" alt="a photo of willa"></div>`;
    })
    .join("");

  galleryEl.insertAdjacentHTML("beforeend", imagesHTMLStr);

  imagesLoaded(galleryEl, () => {
    new Masonry(galleryEl, {
      itemSelector: ".photo",
      columnWidth: ".photo",
      gutter: 16,
      fitWidth: true
    });
  });
};
