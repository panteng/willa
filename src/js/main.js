import "normalize.css";
import "../scss/root.scss";
import imagesList from "../img/img";

import renderImagesList from "./renderImagesList";
import enableMasonry from "./enableMasonry";

const masonryOptions = {
  itemSelector: ".item",
  columnWidth: ".item",
  initLayout: false
};

window.onload = () => {
  renderImagesList(".gallery", imagesList);
  enableMasonry(".gallery", masonryOptions);
};
