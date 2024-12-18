let navbar = document.querySelector("#navbar");
let logo = document.querySelector("#logo")


window.addEventListener( "scroll", () => {

        logo.style.transform = `rotateZ(${window.scrollY}deg)`;

        if(window.scrollY > 0) {

            navbar.classList.add("navbarScroll")
        
        } else {

            navbar.classList.remove("navbarScroll")

        }

})


