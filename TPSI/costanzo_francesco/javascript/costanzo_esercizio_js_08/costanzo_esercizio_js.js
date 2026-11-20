//Funzioni raccogli dati

function getId(id) {
    return document.getElementById(id);
}

function getDato(nome) {
    return document.getElementById(nome).value;
}

// Funzione crea elementi

function creaElemento(tipo) {
    return document.createElement(tipo);
}

//funzioni per css

function addClasse(elemento, classe) {
    elemento.classList.add(classe);
}

function toggleClasse(elemento, classe) {
    elemento.classList.toggle(classe);
}

//funzioni per ToDo List

function elimina(sender){
    const container = getId(sender.srcElement.id);
    container.remove();
}

function barrato(sender){
    const testo = getId(sender.srcElement.id);
    toggleClasse(testo, "testoBarrato");
}

function aggiungi() {

    const nomeTask = getDato("task");

    if (nomeTask.length == 0) {
        alert("Soddisfa tutti i campi");
        return;
    }

    const prio = getDato("prio");
    const container = creaElemento("div");
    const taskText = creaElemento("div");   
    const arrow = creaElemento("div");
    const checkMark = creaElemento("div");
    const checkBox = creaElemento("input");
    const cestino = creaElemento("div");
    const bottone = creaElemento("button");   
    const tutteLeTask = document.getElementById("tutteLeTask");
    addClasse(container, "tasks");
    
    taskText.classList.add("text");

    addClasse(arrow, "arrow");
    checkBox.type = "checkbox";
    taskText.id = Date.now();
    checkBox.id = taskText.id;
    checkBox.addEventListener('change', barrato);
    addClasse(checkMark, "checkMark");

    addClasse(cestino, "cestino");
    
    taskText.innerText = nomeTask;

    if (prio == "bassa") {
        arrow.classList.add("verde");
    } else if (prio == "media") {
        arrow.classList.add("arancione");
    } else if (prio == "alta") {
        arrow.classList.add("rosso");
    }
    arrow.innerText = prio;
    bottone.innerText = "Cancella";

    cestino.append(bottone);
    checkMark.append(checkBox);
    container.append(taskText, arrow, checkMark, cestino);
    tutteLeTask.append(container);
    container.id = Date.now();
    bottone.id = container.id;
    bottone.addEventListener('click', elimina);
    
}