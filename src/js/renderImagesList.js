import imagesLoaded from "imagesloaded";

const HIDDEN_CLASS = "hidden";

const renderImagesList = (containerSelector, imagesList) => {
  const containerEl = document.querySelector(containerSelector);
  const imagesHTMLStr = getImagesListHTMLStr(imagesList);

  containerEl.classList.add(HIDDEN_CLASS);

  containerEl.insertAdjacentHTML("beforeend", imagesHTMLStr);

  imagesLoaded(containerEl, () => containerEl.classList.remove(HIDDEN_CLASS));
};

const getImagesListHTMLStr = imagesList => {
  return imagesList
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
};

export default renderImagesList;
