const burgerButton = document.querySelector(".burger-menu");
const mainContent = document.querySelector(".content");
const footerMain = document.querySelector(".social-medias");

const navBar = document.querySelector(".nav-bar");
const listItems = document.querySelectorAll(".list-item");
const navList = document.querySelector(".nav-list");

const contentSection1 = document.querySelector(".section1");
const contentSection2 = document.querySelector(".section2");
const contentSection3 = document.querySelector(".section3");

burgerButton.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("transformed");
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

    contentSection1.classList.toggle("transform"); //for each
    contentSection2.classList.toggle("transform");
    contentSection3.classList.toggle("transform");
    mainContent.classList.toggle("transform");
    footerMain.classList.toggle("transform");
}
