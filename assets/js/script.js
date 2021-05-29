const burgerButton = document.querySelector(".burger-menu");

burgerButton.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("transformed");
    // const burgerBars = Array.from(e.currentTarget.children);

    // // burgerBars.forEach((element) => {
    // //     element.classList.toggle("transformed");
    // // });
});
