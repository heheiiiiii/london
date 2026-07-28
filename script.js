document.addEventListener("DOMContentLoaded", function () {


    /* =====================
       FAQ ACCORDION
    ===================== */


    const faqItems = document.querySelectorAll(".faq-item");


    faqItems.forEach(item => {


        const question = item.querySelector(".faq-question");


        question.addEventListener("click", () => {


            faqItems.forEach(other => {

                if(other !== item){

                    other.classList.remove("active");

                }

            });


            item.classList.toggle("active");


        });


    });







    /* =====================
       SMOOTH SCROLL
    ===================== */


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {


        anchor.addEventListener("click", function(e){


            const target =
            document.querySelector(this.getAttribute("href"));


            if(target){


                e.preventDefault();


                const navbarHeight =
                document.querySelector(".navbar").offsetHeight;


                window.scrollTo({

                    top:
                    target.offsetTop - navbarHeight,

                    behavior:
                    "smooth"

                });


            }


        });


    });








    /* =====================
       SCROLL FADE ANIMATION
    ===================== */


    const revealElements =
    document.querySelectorAll(
        ".section, .benefit-card, .work-box, .condition-card, .process-card, .review-card"
    );



    revealElements.forEach(element => {


        element.classList.add("hidden");


    });




    const observer =
    new IntersectionObserver(
        entries => {


            entries.forEach(entry => {


                if(entry.isIntersecting){


                    entry.target.classList.add("show");


                    observer.unobserve(entry.target);


                }


            });


        },

        {

            threshold:
            0.15

        }


    );



    revealElements.forEach(element => {


        observer.observe(element);


    });







});
