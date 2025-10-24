const API_URL = 'http://localhost:3000/api';

const form = document.getElementById("ficha-form");
const resultadoDiv = document.getElementById("resultado");
const fichaJSON = document.getElementById("ficha-json");

function coletarItensInventario() {
    const itens = [];
    document.querySelectorAll('.item-entrada').forEach(entrada => {
        const checkbox = entrada.querySelector('input[type="checkbox"]');
        const nomeItem = entrada.querySelector('input[type="text"]').value;
        if (checkbox.checked && nomeItem) {
            itens.push({
                id: checkbox.value,
                nome: nomeItem
            });
        }
    });
    return itens;
}

function mostrarMensagem(mensagem, tipo = 'sucesso') {
    const mensagemDiv = document.createElement('div');
    mensagemDiv.className = `mensagem ${tipo}`;
    mensagemDiv.textContent = mensagem;
    document.querySelector('.container').insertBefore(mensagemDiv, resultadoDiv);
    setTimeout(() => mensagemDiv.remove(), 5000);
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
        // Coleta todos os dados do formulário
        const ficha = {
            nome: document.getElementById("nome").value,
            raca: document.getElementById("raca").value,
            elemento: document.getElementById("elemento").value,
            classe: document.querySelector('input[name="classe"]:checked')?.value || "Nenhuma",
            nivel: parseInt(document.getElementById("nivel").value),
            atributos_iniciais: {
                vida: parseInt(document.getElementById("vida").value),
                energia_universal: parseInt(document.getElementById("mana").value),
                estamina: parseInt(document.getElementById("estamina").value),
                sanidade: parseInt(document.getElementById("sanidade").value),
                vontade: parseInt(document.getElementById("vontade").value),
                ouro: parseInt(document.getElementById("ouro").value),
                experiencia: parseInt(document.getElementById("xp").value)
            },
            pericias: {
                forca: parseInt(document.getElementById("forca").value),
                inteligencia: parseInt(document.getElementById("inteligencia").value),
                sabedoria: parseInt(document.getElementById("sabedoria").value),
                carisma: parseInt(document.getElementById("carisma").value),
                combate_armas: parseInt(document.getElementById("combate-armas").value),
                investigacao: parseInt(document.getElementById("investigacao").value),
                intimidacao: parseInt(document.getElementById("intimidacao").value),
                domesticacao: parseInt(document.getElementById("domesticacao").value),
                sorte: parseInt(document.getElementById("sorte").value),
                pontaria: parseInt(document.getElementById("pontaria").value),
                agilidade: parseInt(document.getElementById("agilidade").value),
                acrobacias: parseInt(document.getElementById("acrobacias").value),
                artes_marciais: parseInt(document.getElementById("artes-marciais").value),
                cultura: parseInt(document.getElementById("cultura").value),
                medicina: parseInt(document.getElementById("medicina").value)
            },
            pactos: document.getElementById("pacto").value,
            inventario: coletarItensInventario()
        };

        const response = await fetch(`${API_URL}/fichas`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
            },
            body: JSON.stringify(ficha)
        });

        if (!response.ok) {
            throw new Error('Erro ao salvar a ficha');
        }

        const fichaResposta = await response.json();
        
        resultadoDiv.style.display = "block";
        fichaJSON.textContent = JSON.stringify(fichaResposta, null, 2);
        mostrarMensagem('Ficha salva com sucesso!');

    } catch (erro) {
        console.error('Erro:', erro);
        mostrarMensagem(erro.message, 'erro');
    }
});
