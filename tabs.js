document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab_tab-wrapper");
  const tabImages = document.querySelectorAll(".tab_image");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((tab) => {
        tab.classList.remove("tab-open");
      });
      tabImages.forEach((tabImage) => {
        tabImage.classList.remove("tab-open");
      });
      tabs[index].classList.add("tab-open");
      tabImages[index].classList.add("tab-open");
    });
  });
});
