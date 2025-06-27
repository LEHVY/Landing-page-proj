
const faqContainer = document.querySelector(".faq-content");
const hamburgerButton = document.querySelector('.hamburger-button')
const mobileMenu = document.querySelector('.mobile-menu');
const navBar = document.querySelector('.navbar')


document.addEventListener("DOMContentLoaded", () => {

    faqContainer.addEventListener("click", (e) => {
        groupHeader = e.target.closest(".faq-group-header");
        if (!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector(".faq-g-group-body");
        const icon = groupHeader.querySelector("i");


        // Toggle icons
        icon.classList.toggle("fa-add");
        icon.classList.toggle("fa-x");

        //toggle visibility of body
        groupBody.classList.toggle('open')

        ///Close other open FAQ bodies
        const otherGroups = faqContainer.querySelectorAll(".faq-group");
        // console.log(otherGroups)



        otherGroups.forEach((othergroup) => {
            if (othergroup !== group) {
                const otherGroupBody = othergroup.querySelector(".faq-g-group-body");
                const otherIcon = othergroup.querySelector(".faq-group-header i")


                otherGroupBody.classList.remove("open");
                otherIcon.classList.remove("fa-x");
                otherIcon.classList.add("fa-add")
            }


        });






    });
});

///////mobile menu
document.addEventListener("DOMContentLoaded", () => {




    hamburgerButton.addEventListener("click", () =>
        mobileMenu.classList.toggle('active')


    )

})


////////remove mobile menu on click

document.addEventListener("click", (e) => {
    if (!navBar.contains(e.target) && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
    }
});


/////dark mode trigger
const darkMode = document.querySelector(".darkmode")
const Dcircle = darkMode.querySelector(".circle")

darkMode.addEventListener('click', darkModeTrigger)
function darkModeTrigger(){
   Dcircle.classList.toggle("slide")
  document.body.classList.toggle("dark-theme");
}




