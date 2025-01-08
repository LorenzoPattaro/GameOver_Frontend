



fetch("../JSON/giochi.json").then( (response) => response.json()).then( (giochi) => {
    
// VISUALIZZAZIONE GIOCHI
let cardsWrapper = document.querySelector("#cardsWrapper");

function visualizzazioneCards (array) {

    cardsWrapper.innerHTML=``;

    array.forEach ( card => {

        let div = document.createElement("div");
        div.classList.add("col-12", "col-md-3", "card","bg-color-a", "mx-5", "mb-5", "p-0", "text-center");
        //  div.style.width = "18rem";

        div.innerHTML = `
                    <figure>
                    <img src="../media/${card.copertina}" class="card-img-top" alt="...">
                    </figure>
                    
                    <div class="card-body m-0">
                    <h4 class="card-title title color-s text-color-p-shadow fw-bold pb-3 mb-3 border-bottom border-2 ">${card.titolo}</h5>
                    <p class="card-text color-s">
                        ${card.descrizione}
                    </p>
                    <a href=${card.link} target="_blank" class="btn btn-outline-p">Più Informazioni</a>
                    </div>
        `
        cardsWrapper.appendChild(div)
    } )
}

visualizzazioneCards(giochi)
// FINE VISUALIZZAZIONI CARDS





// CREAZIONE CATEGORIE DINAMICHE
let categoryWrapper = document.querySelector("#categoryWrapper");

function setCategory () {

    let categorieMapped = giochi.map( (gioco) => gioco.categoria)
    let categorie = [];
    categorieMapped.forEach( (categoria) => {

        if(!categorie.includes(categoria)){

            categorie.push(categoria)
        }
    })

    console.log(categorie)

categorie.forEach( (categoria) => {

    let div = document.createElement("div");
    
    div.classList.add("form-check", "ps-5");

    div.innerHTML=
                    `
                    <input class="form-check-input" type="radio" name="radiosFilter" id="${categoria}" >
                    <label class="form-check-label color-s fs-5 color-s text-color-p-shadow text-center mb-2" for="${categoria}">
                        ${categoria}
                    </label>
                    `;
    
    categoryWrapper.appendChild(div)
    
})
}
setCategory()
// FINE CREAZIONE CATEGORIE DINAMICHE




// FILTRI CATEGORIE
 let formCheckInputs = document.querySelectorAll(".form-check-input");

 function filterByCategory (array){

    let radioBtns = Array.from(formCheckInputs) //  trasforma un insieme di elementi in un array

    let btnChecked = radioBtns.find( (radioBtn) => radioBtn.checked == true);

    let filtered = array.filter ( (gioco) => gioco.categoria == btnChecked.id)
    
    if(btnChecked.id == "tutti"){

        return array;
        // visualizzazioneCards(array)

    } else {   

        return filtered;
        // visualizzazioneCards(filtered)
    }
 }

formCheckInputs.forEach( (radio) =>{

    radio.addEventListener( "input", ()=>{

        // filterByCategory(giochi);
        globalFilter();

         
    })
})
// FINE FILTRI CATEGORIE




// CREAZIONE PREZZI DINAMICI
let inputRangePrice = document.querySelector("#inputRangePrice");
let labelPrice = document.querySelector("#labelPrice");

function setMinMaxPrice(){

    let prezzoMapped = giochi.map( (gioco) => gioco.prezzo);

    let max = Math.max(...prezzoMapped);
    let min = Math.min(...prezzoMapped);

    inputRangePrice.max = max;
    inputRangePrice.min = min;
    inputRangePrice.value = max;

    labelPrice.innerHTML = inputRangePrice.max + "€";
}
setMinMaxPrice()
// FINE CREAZIONE PREZZI DINAMICI




// FILTRO PREZZI
function filterByPrice(array) {

    let prezzoFiltered = array.filter( (gioco) => gioco.prezzo <= inputRangePrice.value);
    
    // visualizzazioneCards(prezzoFiltered)
    return prezzoFiltered
}

inputRangePrice.addEventListener( "input", ()=> {

    labelPrice.innerHTML = `${inputRangePrice.value} €`;

    // filterByPrice(giochi);
    globalFilter();

})
// FINE FILTRO PREZZI




// FILTRO NOMI
let searchName = document.querySelector("#searchName");

function setSearchName(array) {

    let giochiFiltered = array.filter( (gioco) => gioco.titolo.toLowerCase().includes(searchName.value.toLowerCase()));

  
    // visualizzazioneCards(giochiFiltered);
    return giochiFiltered;
}


searchName.addEventListener("input", ()=> {

    // setSearchName(giochi);
    globalFilter();
})
// FINE FILTRO NOMI




// GLOBAL FILTER

function globalFilter(){

    let risultatoFiltroCategoria = filterByCategory(giochi);
    let risultatoFiltroPrezzi = filterByPrice(risultatoFiltroCategoria);
    let risultatoFiltroNome = setSearchName(risultatoFiltroPrezzi);

    visualizzazioneCards(risultatoFiltroNome);
}



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




