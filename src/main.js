import "normalize.css";
import "./style.scss";
import images from "./img/img";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

window.onload = () => {
  const galleryEl = document.querySelector(".gallery");
  const footerEl = document.querySelector(".footer");

  const imagesHTMLStr = images
    .map(imgSrc => {
      return `
        <li class="item">
          <div class="inner">
            <img class="photo" src="${imgSrc}" alt="a photo of willa">
          </div>
        </li>
      `;
    })
    .join("");

  galleryEl.insertAdjacentHTML("beforeend", imagesHTMLStr);

  const msnry = new Masonry(galleryEl, {
    itemSelector: ".item",
    columnWidth: ".item",
    initLayout: false
  });

  imagesLoaded(galleryEl, () => {
    galleryEl.classList.remove("hidden");
    footerEl.classList.remove("hidden");

    msnry.layout();
  });
};
