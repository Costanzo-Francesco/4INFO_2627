function getDato (dato) {
    return document.getElementById(dato).value;
}

function getId (id) {
    return document.getElementById(id);
}
function creaElemento (elemento){
    return document.createElement(elemento);
}

function AddClasse (elemento, classe) {
    elemento.classList.add(classe);
}

function aggiungi() {
    console.log("Aggiungi avvio");
    const dipartimento = getDato("dipartimento");
    const cognome = getDato("cognome");
    const nome = getDato("nome");
    const mese = getDato("mese");
    const importo = getDato("importo");
    if (dipartimento.length == 0 || cognome.length == 0 || nome.length == 0 || mese.length == 0 || importo.length == 0){
        alert("Riempi tutti i campo prima di continuare");
        return
    }

    const tabella = getId("corpoTabella");
    const riga = creaElemento("tr");
    const colonnaDipartimento = creaElemento("td");
    const colonnaCognome = creaElemento("td");
    const colonnaNome = creaElemento("td");
    const colonnaMese = creaElemento("td");
    const colonnaImporto = creaElemento("td");

    colonnaDipartimento.innerText = dipartimento;
    colonnaCognome.innerText = cognome;
    colonnaNome.innerText = nome;
    colonnaMese.innerText = mese;
    colonnaImporto.innerText = importo;
    AddClasse(colonnaImporto, "importo");
    riga.append(colonnaDipartimento, colonnaCognome, colonnaNome, colonnaMese, colonnaImporto);
    tabella.prepend(riga);
}

function calcoloTotale (){
    let totale = 0;
    const corpoTabella = getId("corpoTabella");
    const figliCorpo = corpoTabella.children;
    if (figliCorpo.length > 7) {
        const valori = document.getElementsByClassName("importo");
        for (let i = 0; i < figliCorpo.length - 6; i++){
            totale += Number(valori[i].innerText);
        }
    
        return totale;
    } else {
        alert("Almeno 2 dati per procedere");
    }
}

function calcolaPaghe() { 
    const fasciaTotale = getId("totale");
    fasciaTotale.innerText = calcoloTotale() + " \u20AC";
}

function calcolaMedia() { 
    
    totaleFigli = getId("corpoTabella").children.length - 6;
    const fasciaMedia = getId("media");
    fasciaMedia.innerText = calcoloTotale()/totaleFigli + " \u20AC";
    
}