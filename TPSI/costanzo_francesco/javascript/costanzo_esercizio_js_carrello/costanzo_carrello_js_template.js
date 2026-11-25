function getValue(oggetto) {
    return document.getElementById(oggetto).value;
}

function getId(oggetto) {
    return document.getElementById(oggetto);
}

function creaElemento(elemento) {
    return document.createElement(elemento);
}

function addClasse(elemento, classe) {
    elemento.classList.add(classe);
}

function aggiungi() {
    
    const prodotto = getValue("prodotto");
    const quantity = getValue("qty");
    const costo = getValue("costo");

    if (prodotto.length == 0 || quantity.length == 0 || costo.length == 0) {
        alert("Errore riempire tutti i campi");
        return;
    }

    const corpoTabella = getId("corpoCarrello");
    const nuovaRiga = creaElemento("tr");
    const colonnaProdotto = creaElemento("td");

    //oggetti per quantity

    const colonnaQuantity = creaElemento("td");
    const modificaQuantity = creaElemento("input");
    modificaQuantity.type = "number";
    modificaQuantity.value = quantity;

    
    modificaQuantity.addEventListener(change, sommaSingolo);


    const colonnaCosto = creaElemento("td");
    const colonnaCostoOggetti = creaElemento("td");
    const colonnaElimina = creaElemento("td");
    
    //icona elimina
    const iconaElimina = creaElemento("span");
    iconaElimina.innerText = "remove_shopping_cart";
    

    colonnaProdotto.innerText = prodotto;
    colonnaCosto.innerText = costo;
    colonnaCostoOggetti.innerText = costo*quantity;

    colonnaQuantity.append(modificaQuantity);
    colonnaElimina.append(iconaElimina);
    nuovaRiga.append(colonnaProdotto, colonnaQuantity, colonnaCosto, colonnaCostoOggetti, colonnaElimina);
    corpoTabella.prepend(nuovaRiga);


    //classi
    addClasse(colonnaCostoOggetti, "importo");
    addClasse(iconaElimina, "material-icons");
    addClasse(iconaElimina, "icon-remove"); 
    
}