const form = document.getElementById("ficha-form");
const resultadoDiv = document.getElementById("resultado");
const fichaJSON = document.getElementById("ficha-json");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Pega os dados do formulário
  const ficha = {
    nome: document.getElementById("nome").value,
    raca: document.getElementById("raca").value,
    classe:document.querySelector('input[name="classe"]:checked')?.value ||"Nenhuma",
    nivel: parseInt(document.getElementById("nivel").value),
    atributos: {
      forca: parseInt(document.getElementById("forca").value),
      destreza: parseInt(document.getElementById("destreza").value),
      constituicao: parseInt(document.getElementById("constituicao").value),
      inteligencia: parseInt(document.getElementById("inteligencia").value),
      sabedoria: parseInt(document.getElementById("sabedoria").value),
      carisma: parseInt(document.getElementById("carisma").value),
    },
  };

  // Mostra no navegador (por enquanto)
  resultadoDiv.style.display = "block";
  fichaJSON.textContent = JSON.stringify(ficha, null, 2);

  // Envia para o backend futuramente
  /*
  await fetch("http://localhost:3000/fichas", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ficha)
  });
  */
});
