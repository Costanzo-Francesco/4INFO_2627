function getDato(nome) {
    return document.getElementById(nome).value;
}

function creaElemento(tipo) {
    return document.createElement(tipo);
}

function addClasse(elemento, classe) {
    elemento.classList.add(classe);
}

function elimina(sender){
    console.log("elimina avvio");
    const container = document.getElementById(sender.srcElement.id)
    container.remove();

}
function aggiungi() {

    console.log("Aggiungi avvio");
    const nomeTask = getDato("task");

    if (nomeTask.length == 0) {
        alert("Soddisfa tutti i campi");
        return;
    }

    const prio = getDato("prio");
    console.log(nomeTask, prio);

    const container = creaElemento("div");
    const taskText = creaElemento("div");
    addClasse(container, "tasks");
    const arrow = creaElemento("div");
    taskText.classList.add("text");
    const checkMark = creaElemento("div");
    const checkBox = creaElemento("input");
    addClasse(arrow, "arrow");
    checkBox.type = "checkbox"; //ToDo Event listener
    addClasse(checkMark, "checkMark");
    const cestino = creaElemento("div");
    const bottone = creaElemento("button");
    addClasse(cestino, "cestino");//ToDo Event Listener
    
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
    const tutteLeTask = document.getElementById("tutteLeTask");
    cestino.append(bottone);
    checkMark.append(checkBox);
    container.append(taskText, arrow, checkMark, cestino);
    tutteLeTask.append(container);
    container.id = Date.now();
    bottone.id = container.id;
    bottone.addEventListener('click', elimina);
    
}