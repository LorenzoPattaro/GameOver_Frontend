
let cards  = [

            {"titolo": "God Of War", "descrizione": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos sed maiores, placeat reprehenderit iste explicabo corporis omnis", "categoria": "Avventura", "dataPubblicazione": "12/10/2002", "copertina": "tlou.avif", "link": "https://www.playstation.com/it-it/god-of-war/"},

            {"titolo": "Skyrim", "descrizione": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos sed maiores, placeat reprehenderit iste explicabo corporis omnis", "categoria": "RPG", "dataPubblicazione": "12/10/2002", "copertina": "tlou.avif", "link": "https://www.playstation.com/it-it/games/the-elder-scrolls-v-skyrim/"},

            {"titolo": "EA Sports Fc25", "descrizione": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos sed maiores, placeat reprehenderit iste explicabo corporis omnis", "categoria": "Sport", "dataPubblicazione": "12/10/2002", "copertina": "tlou.avif", "link": "https://www.playstation.com/it-it/games/ea-sports-fc/"},

            {"titolo": "The Last Of US", "descrizione": "Dopo un evento traumatico, Ellie intraprende una missione di vendetta che esplora temi di dolore, perdita e moralità.", "categoria": "Sopravvivenza", "dataPubblicazione": "12/10/2002", "copertina": "tlou.avif", "link": "https://www.playstation.com/it-it/games/the-last-of-us-part-ii-remastered/"},

            {"titolo": "Read Dead Redemption ll", "descrizione": "Ambientato nel 1899, segue la storia di Arthur Morgan, un fuorilegge in fuga dal cambiamento del selvaggio West.", "categoria": "Avventura", "dataPubblicazione": "12/10/2002", "copertina": "rdr2.avif", "link": "https://www.playstation.com/it-it/games/red-dead-redemption-2/"},

            {"titolo": "Rainbow Six Siege", "descrizione": "E' un gioco tattico in prima persona che mette i giocatori nei panni di operazioni speciali di élite in scenari di assalto e difesa.", "categoria": "Sparatuttp", "dataPubblicazione": "12/10/2002", "copertina": "r6.avif", "link": "https://store.playstation.com/it-it/product/EP0001-CUSA01788_00-RAINBOWSIXSIEGE"}

];

let newCardsWrapper = document.querySelector("#newCardsWrapper");


// visualizzazione ultime 3 cards a schermo

let last3Cards = cards.slice(-3);

last3Cards.forEach ( card => {

        let div = document.createElement("div");
        div.classList.add("col-12", "col-md-3", "d-flex","flex-wrap", "card","bg-color-a", "p-0", "text-center", "my-5", "me-0");
        // div.style.width = "18rem";

        div.innerHTML = `
                    <figure>
                    <img src="./media/${card.copertina}" class="card-img-top" alt="...">
                    </figure>
                    
                    <div class="card-body m-0">
                    <h4 class="card-title title color-s text-color-p-shadow fw-bold pb-3 mb-3 border-bottom border-2 ">${card.titolo}</h5>
                    <p class="card-text color-s">
                        ${card.descrizione}
                    </p>
                    <a href=${card.link} target="_blank" class="btn btn-outline-p">Più Informazioni</a>
                    </div>
        `
        
        newCardsWrapper.append(div)
    } )
// fine visualizzazione ultime 3 cards a schermo


    let categories = [

        {"nome": "Sparatutto", "link": "https://www.playstation.com/it-it/editorial/best-team-shooters-on-ps4-ps5/"},
        {"nome": "Survival", "link": "https://www.playstation.com/it-it/editorial/best-survival-games-ps4-ps5/"},
        {"nome": "RPG", "link": "https://multiplayer.it/giochi/playstation-4/gioco-di-ruolo/?o=i-migliori"},
        {"nome": "Avventura", "link": "https://www.playstation.com/it-it/editorial/great-narrative-games-on-ps4/"},
        {"nome": "Sport", "link": "https://www.playstation.com/it-it/editorial/best-ps4-sports-games/"},
        {"nome": "Horror", "link": "https://www.playstation.com/it-it/editorial/great-horror-games-on-ps4/"}
]

let categoryWrapper = document.querySelector("#categoryWrapper");


//Visualizzazione Categorie a schermo
    
    categories.forEach( category => {

        let div = document.createElement("div");

        console.log(category.nome)
        div.classList.add("col-12", "col-md-4", "p-0", "m-0", "box-categorie", "d-flex", "justify-content-center", "align-items-center")
        div.setAttribute("data-aos","zoom-in")

        div.innerHTML= 
                        `
                        <div class="position-relative">
                        <img src="./media/categorie.png" alt="" style="width: 350px;">
                    </div>

                    <div class="position-absolute">
                        <h3 class="color-s text-color-p-shadow"><a href="${category.link}" target="_blank">${category.nome}</a></h3>
                    </div>
                        `
        categoryWrapper.append(div)
    })

// fine Visualizzazione Categorie a schermo





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

