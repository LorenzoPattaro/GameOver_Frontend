
let cards  = [

            {"titolo": "The Last Of US", "descrizione": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos sed maiores, placeat reprehenderit iste explicabo corporis omnis", "categoria": "Sopravvivenza", "dataPubblicazione": "12/10/2002", "copertina": "tlou.avif"},

            {"titolo": "Read Dead Redemption ll", "descrizione": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos sed maiores, placeat reprehenderit iste explicabo corporis omnis", "categoria": "Sopravvivenza", "dataPubblicazione": "12/10/2002", "copertina": "rdr2.avif"},

            {"titolo": "Rainbow Six Siege", "descrizione": "lLorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos sed maiores, placeat reprehenderit iste explicabo corporis omnis", "categoria": "Sopravvivenza", "dataPubblicazione": "12/10/2002", "copertina": "r6.avif"}

];

let cardsWrapper = document.querySelector("#cardsWrapper");


// visualizzazione cards a schermo

cards.forEach ( card => {

        let div = document.createElement("div");
        div.classList.add("col-3", "card","bg-color-a", "p-0", "text-center", "my-5");
        // div.style.width = "18rem";

        div.innerHTML = `
                    <figure>
                    <img src="./media/${card.copertina}" class="card-img-top" alt="...">
                    </figure>
                    
                    <div class="card-body">
                    <h4 class="card-title title color-s text-color-p-shadow fw-bold pb-3 mb-3 border-bottom border-2 ">${card.titolo}</h5>
                    <p class="card-text color-s">
                        ${card.descrizione}
                    </p>
                    <a href="#" class="btn btn-outline-p">Più Informazioni</a>
                    </div>
        `
        
        cardsWrapper.append(div)
    } )
// fine visualizzazione cards a schermo


    let categories = [

        {"nome": "Azione"},
        {"nome": "Avventura"},
        {"nome": "RPG"},
        {"nome": "Strategia"},
        {"nome": "Sport"},
        {"nome": "Horror"}
]

let categoryWrapper = document.querySelector("#categoryWrapper");


//Visualizzazione Categorie a schermo
    
    categories.forEach( category => {

        let div = document.createElement("div");

        console.log(category.nome)
        div.classList.add("col-3", "box-categorie", "d-flex", "justify-content-center", "align-items-center")
        div.setAttribute("data-aos","zoom-in")

        div.innerHTML= 
                        `
                        <div class="position-relative">
                        <img src="./media/categorie.png" alt="" style="width: 350px;">
                    </div>

                    <div class="position-absolute">
                        <h3 class="color-s text-color-p-shadow"><a href="">${category.nome}</a></h3>
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

