let botaoAdicionar = document.querySelector("#adicionar")
botaoAdicionar.addEventListener("click", function(){
    console.log("Fui clicado!")
    event.preventDefault()


    let formularioGeral = document.querySelector(".formulario")

    let nome = formularioGeral.nome.value;
    let peso = formularioGeral.peso.value;
    let altura = formularioGeral.altura.value;

    let tabelaTr = document.createElement("tr")

    let nomeTd = document.createElement("td");
    let pesoTd = document.createElement("td");
    let alturaTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;

    tabelaTr.appendChild(nomeTd)
    tabelaTr.appendChild(pesoTd)
    tabelaTr.appendChild(alturaTd)

   let tabelaToda = document.querySelector(".tabela-1")

   tabelaToda.appendChild(tabelaTr)

   console.log(tabelaToda)



})



