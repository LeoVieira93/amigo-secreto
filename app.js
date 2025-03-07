let nomes = [];

function adicionarAmigo() {
    const inputNome = document.getElementById("amigo");
    const nome = inputNome.value.trim();

    if(nome !== "") {
        nomes.push(nome);
        inputNome.value = "";

        atualizarListaAmigos();
    } else {
        alert("Por favor, digite um nome válido!");
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    nomes.forEach(function(amigo){
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if(nomes.length === 0) {
        alert("Adicione pelo menos um amigo para sortear!");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    const amigoSorteado = nomes[indiceSorteado];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo sorteado é: ${amigoSorteado}</li>`
}

