
// let cards  = [

//             {"titolo": "God Of War", "descrizione": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos sed maiores, placeat reprehenderit iste explicabo corporis omnis", "categoria": "Avventura", "dataPubblicazione": "12/10/2002", "copertina": "tlou.avif", "link": "https://www.playstation.com/it-it/god-of-war/"},

//             {"titolo": "Skyrim", "descrizione": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos sed maiores, placeat reprehenderit iste explicabo corporis omnis", "categoria": "RPG", "dataPubblicazione": "12/10/2002", "copertina": "tlou.avif", "link": "https://www.playstation.com/it-it/games/the-elder-scrolls-v-skyrim/"},

//             {"titolo": "EA Sports Fc25", "descrizione": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos sed maiores, placeat reprehenderit iste explicabo corporis omnis", "categoria": "Sport", "dataPubblicazione": "12/10/2002", "copertina": "tlou.avif", "link": "https://www.playstation.com/it-it/games/ea-sports-fc/"},

//             {"titolo": "The Last Of US", "descrizione": "Dopo un evento traumatico, Ellie intraprende una missione di vendetta che esplora temi di dolore, perdita e moralità.", "categoria": "Sopravvivenza", "dataPubblicazione": "12/10/2002", "copertina": "tlou.avif", "link": "https://www.playstation.com/it-it/games/the-last-of-us-part-ii-remastered/"},

//             {"titolo": "Read Dead Redemption ll", "descrizione": "Ambientato nel 1899, segue la storia di Arthur Morgan, un fuorilegge in fuga dal cambiamento del selvaggio West.", "categoria": "Avventura", "dataPubblicazione": "12/10/2002", "copertina": "rdr2.avif", "link": "https://www.playstation.com/it-it/games/red-dead-redemption-2/"},

//             {"titolo": "Rainbow Six Siege", "descrizione": "E' un gioco tattico in prima persona che mette i giocatori nei panni di operazioni speciali di élite in scenari di assalto e difesa.", "categoria": "Sparatuttp", "dataPubblicazione": "12/10/2002", "copertina": "r6.avif", "link": "https://store.playstation.com/it-it/product/EP0001-CUSA01788_00-RAINBOWSIXSIEGE"}

// ];




//

fetch("./JSON/giochi.json").then( (response) => response.json()).then( (giochi) => {

    
    let newCardsWrapper = document.querySelector("#newCardsWrapper");

    // visualizzazione ultime 3 cards a schermo
    function newCard(){

        let last3Cards = giochi.slice(-3);
        
        last3Cards.forEach ( card => {
        
                let div = document.createElement("div");
                div.classList.add("col-12", "col-md-3", "card","bg-color-a", "p-0", "text-center", "my-5", "me-0");
        
                div.innerHTML = `
                            <figure>
                            <img src="./media/${card.copertina}" class="card-img-top" alt="...">
                            </figure>
                            
                            <div class="card-body m-0">
                            <h4 class="card-title title color-s text-color-p-shadow fw-bold pb-3 mb-3 border-bottom border-2 text-truncate">${card.titolo}</h5>
                            <p class="card-text color-s text-truncate">
                                ${card.descrizione}
                            </p>
                            <p class="card-text color-s">
                                ${card.prezzo}€
                            </p>
                            <a href=${card.link} target="_blank" class="btn btn-outline-p">Più Informazioni</a>
                            </div>
                `
                
                newCardsWrapper.appendChild(div)
        } )

    }

    newCard();
    // fine visualizzazione ultime 3 cards a schermo


    // CREAZIONE CATEGORIE DINAMICHE
    let categoryWrapper = document.querySelector("#categoryWrapper");

    function setCategory(){

        let categoriaMapped = giochi.map( (gioco) => gioco.categoria);
        let arrayAppoggio = [];

        categoriaMapped.forEach( categoria => {

            if(!arrayAppoggio.includes(categoria)){

                arrayAppoggio.push(categoria);
            
                let div = document.createElement("div");
                
                div.classList.add("col-12", "col-md-4", "p-0", "m-0", "box-categorie", "d-flex", "justify-content-center", "align-items-center")
                div.setAttribute("data-aos","zoom-in")
        
                div.innerHTML= 
                                `
                                <div class="position-relative">
                                <img src="./media/categorie.png" alt="" style="width: 350px;">
                            </div>
        
                            <div class="position-absolute">
                                <h3 class="color-s text-color-p-shadow"><a href="" target="_blank">${categoria}</a></h3>
                            </div>
                                `
                categoryWrapper.appendChild(div)

            }
        })

    }

    setCategory();
    // FINE CREAZIONE CATEGORIE DINAMICHE




    // VISUALIZZAZIONE CAROSELLO
    let mySwiper = document.querySelector(".mySwiper");
    
    function setCarosello() {

        let wrapper = document.createElement("div");

        wrapper.classList.add("swiper-wrapper");

        mySwiper.appendChild(wrapper)

        giochi.forEach( (gioco) => {

            let div = document.createElement("div");

             div.classList.add("swiper-slide", "ao");

            div.innerHTML= 
                            `
                            
                                <img src="./media/${gioco.copertina}" />
                            `
            
                            wrapper.appendChild(div);
        })

        
    }

    setCarosello();
// FINE VISUALIZZAZIONE CAROSELLO


//  Initialize Swiper 
  
const swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".carouselNext",
        prevEl: ".swiper-button-prev",
    },
  });
})


let navbar = document.querySelector("#navbar");
let logo = document.querySelector("#logo");


// evento scroll per modificare la navbar
window.addEventListener( "scroll", () => {

        logo.style.transform = `rotateZ(${window.scrollY}deg)`;

        if(window.scrollY > 0) {

            navbar.classList.add("navbarScroll")
        
        } else {

            navbar.classList.remove("navbarScroll")

        }

})





let numGiochi = document.querySelector("#numGiochi")
let numClienti = document.querySelector("#numClienti")
let numGiochiNuovi = document.querySelector("#numGiochiNuovi")


// funzione per creare un intervallo di tempo in cui stampa i numeri della sezione I NOSTRI NUMERI
function intervalloNostriNumeri (numero, elemento, tempo) {

    let counter = 0;

    let intervallo = setInterval( () => {

        if(counter < numero){

            counter ++;

            elemento.innerHTML =`${counter}+`

        } else {

            clearInterval(intervallo)
        }

    },tempo)
}


let osservatoreControllo = true;

// IntersectionObserver per far partire il counter da un punto specifico del sito 
let osservatore = new IntersectionObserver( entries => {

    if(osservatoreControllo == true) {

        entries.forEach (entry =>{

            if(entry.isIntersecting){

                
                intervalloNostriNumeri(100, numGiochi, 70);
                intervalloNostriNumeri(250, numClienti, 28);
                intervalloNostriNumeri(30, numGiochiNuovi, 230);

                osservatoreControllo = false;
            }

        } )

    }
})

osservatore.observe(numGiochi)



 






