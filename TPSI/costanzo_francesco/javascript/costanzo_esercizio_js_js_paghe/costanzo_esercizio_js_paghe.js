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

    const tabella = getId("paghe")
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
    colonnaImporto.innerText = importo + " \u20AC";
    AddClasse(colonnaImporto, "importo");
    riga.append(colonnaDipartimento, colonnaCognome, colonnaNome, colonnaMese, colonnaImporto);
    tabella.append(riga);

}