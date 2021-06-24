const burgerButton = document.querySelector(".burger-menu");
const mainContent = document.querySelector(".content");
const footerMain = document.querySelector(".social-medias");

const navBar = document.querySelector(".nav-bar");
const listItems = document.querySelectorAll(".list-item");
const navList = document.querySelector(".nav-list");

const contentSections = document.querySelectorAll(".section");

burgerButton.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("transformed");
    console.log(e.currentTarget);
    transformations();
});

navList.addEventListener("click", (e) => {
    burgerButton.classList.toggle("transformed");
    transformations();
});

function transformations() {
    navList.classList.toggle("transform");
    navBar.classList.toggle("transform");
    listItems.forEach((listItem, index) => {
        if (listItem.style.animation) {
            listItem.style.animation = "";
        } else {
            listItem.style.animation = `listItemRender 0.5s ease forwards ${
                index / 7 + 0.3
            }s`;
        }
        2;
    });
    contentSections.forEach((section) => {
        section.classList.toggle("transform");
    });
    document.querySelector("body").classList.toggle("bgcolor");
    mainContent.classList.toggle("transform");
    footerMain.classList.toggle("transform");
}
