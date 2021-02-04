var nome = "Levi Miquéias Lima e Silva";
var cargo = "Desenvoldedor Front end Iniciante";

var nomeHtml = document.getElementById("nome-no-html");
var cargoHtml = document.getElementById("cargo-no-html");
var texto0 = document.getElementById("texto-0")
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocarNomeNoHtml(nome) {
    nomeHtml.innerHTML = nome;
}

function colocarCargoNoHtml(cargo) {
    cargoHtml.innerHTML = cargo;
}

function clickNoProjetos() {
    console.log();
    texto2.style.display = "block";
    texto1.style.display = "none";
    texto0.style.display = "none";
}

function clickNoSobre() {
    console.log();
    texto1.style.display = "block";
    texto2.style.display = "none";
    texto0.style.display = "none";
}

colocarNomeNoHtml(nome);
colocarCargoNoHtml(cargo);