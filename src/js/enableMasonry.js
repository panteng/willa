import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

const enableMasonry = (containerSelector, masonryOptions) => {
  const containerEl = document.querySelector(containerSelector);
  const masonry = new Masonry(containerEl, masonryOptions);

  imagesLoaded(containerEl, () => masonry.layout());
};

export default enableMasonry;
