document.addEventListener("DOMContentLoaded", function () {


    /* =====================
       ROOM IMAGE SLIDER
    ===================== */


    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");
    const roomImage = document.querySelector("#room-image");


    if(nextButton && prevButton && roomImage){


        const images = [

            "사진1주소",
            "사진2주소",
            "사진3주소"

        ];


        let current = 0;



        nextButton.onclick = function(){


            current++;


            if(current >= images.length){

                current = 0;

            }


            roomImage.src = images[current];


        };




        prevButton.onclick = function(){


            current--;


            if(current < 0){

                current = images.length - 1;

            }


            roomImage.src = images[current];


        };


    }





    /* =====================
       FAQ ACCORDION
    ===================== */


    const faqItems = document.querySelectorAll(".faq-item");


    faqItems.forEach(item => {


        const question = item.querySelector(".faq-question");


        if(question){


            question.addEventListener("click", () => {


                const isActive = item.classList.contains("active");



                faqItems.forEach(other => {

                    other.classList.remove("active");

                });



                if(!isActive){

                    item.classList.add("active");

                }


            });


        }


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
        ".section, .benefit-card, .work-box, .condition-card, .process-card, .review-card, .people-box, .faq-item, .accommodation-content"
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

            threshold:0.15

        }


    );





    revealElements.forEach(element => {


        observer.observe(element);


    });




});
