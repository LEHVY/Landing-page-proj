document.addEventListener("DOMContentLoaded", () => {
    faqContainer = document.querySelector(".faq-content");

    faqContainer.addEventListener("click", (e) => {
        groupHeader = e.target.closest(".faq-group-header");
        if (!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector(".faq-g-group-body");
        icon = groupHeader.querySelector("i");


        // Toggle icons
        icon.classList.toggle("fa-add");
        icon.classList.toggle("fa-x");

        //toggle visibility of body
        groupBody.classList.toggle('open')

        ///Close other open FAQ bodies
        const otherGroups = faqContainer.querySelectorAll(".faq-group");



        otherGroups.forEach((othergroup) => {
            if (othergroup !== group) {
                const otherGroupBody = othergroup.querySelector(".faq-g-group-body");
                const otherIcon = othergroup .querySelector(".faq-group-header i")


                otherGroupBody.classList.remove("open");
                otherIcon.classList.remove("fa-x");
                otherIcon.classList.remove("fa-add")
            }


        });






    });
});
