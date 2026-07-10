const receitas = [];

const formulario = document.getElementById("formReceita");

const listaReceitas = document.getElementById("listaReceitas");

const saldo = document.getElementById("saldo");

formulario.addEventListener("submit", cadastrarReceita);

function cadastrarReceita(event){

    event.preventDefault();

    const descricao = document.getElementById("descricao").value;

    const valor = Number(document.getElementById("valor").value);

    const categoria = document.getElementById("categoria").value;

    const data = document.getElementById("data").value;

    if(descricao === "" || valor <=0 || data === ""){

        alert("Preencha todos os campos!");

        return;

    }

    const receita = {

        descricao,
        valor,
        categoria,
        data

    };

    receitas.push(receita);

    mostrarReceitas();

    calcularSaldo();

    formulario.reset();

}

function mostrarReceitas(){

    listaReceitas.innerHTML = "";

    receitas.forEach(function(receita){

        listaReceitas.innerHTML += `

        <div class="receita">

            <h3>${receita.descricao}</h3>

            <p><strong>Valor:</strong> R$ ${receita.valor.toFixed(2)}</p>

            <p><strong>Categoria:</strong> ${receita.categoria}</p>

            <p><strong>Data:</strong> ${receita.data}</p>

        </div>

        `;

    });

}

function calcularSaldo(){

    let total = 0;

    receitas.forEach(function(receita){

        total += receita.valor;

    });

    saldo.textContent = "R$ " + total.toFixed(2);

}