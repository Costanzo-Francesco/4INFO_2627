function prendiDato(dato){
    return document.getElementById(dato).value;
}

function creaElemento(dato){
    return document.createElement(dato);
}

function rimuovi(trPassato) {
    console.log("Rimuovi");
    console.log(trPassato);
    const tr = getElementById(trPassato);
    tr.remove();
}

function salva() {
    console.log("Salva");
    
    let cognome = prendiDato("cognome");
    let nome = prendiDato("nome");
    let indirizzo = prendiDato("indirizzo");
    let numero = prendiDato("numero");

    if (cognome.length == 0 || nome.length == 0 || indirizzo.length == 0 || numero.length == 0){
        alert("Inserisci correttamente tutti i dati prima di aggiungere");
    } else{
        console.log(cognome, nome, indirizzo, numero);
        const tr = creaElemento("tr");
        tr.id = Date.now;
        const tdCognome = creaElemento("td");
        const tdNome = creaElemento("td");
        const tdIndirizzo = creaElemento("td");
        const tdNumero = creaElemento("td");
        const tdBottone = creaElemento("td");
        const bottone = creaElemento("button");

        tdBottone.append(bottone);
        tr.append(tdCognome, tdNome, tdBottone, tdIndirizzo, tdNumero, tdBottone);
        
        const tabella = document.getElementById("tabella");
        tdCognome.innerText = cognome;
        tdNome.innerText = nome;
        tdIndirizzo.innerText = indirizzo;
        tdNumero.innerText = numero;
        bottone.innerText= "Rimuovi";
        bottone.addEventListener('click', rimuovi.bind(null, tr.Id));

        tabella.append(tr);

        const cognomeId = document.getElementById("cognome");
        const nomeId = document.getElementById("nome");
        const indirizzoId = document.getElementById("indirizzo");
        const numeroId = document.getElementById("numero");
        cognomeId.value = '';
        nomeId.value = '';
        indirizzoId.value = '';
        numeroId.value = '';
    }   
}

