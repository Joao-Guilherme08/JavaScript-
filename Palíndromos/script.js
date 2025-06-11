let textInput = document.getElementById("text-input");
let checkBtn = document.getElementById("check-btn");
let result = document.getElementById("result");

let verificarPalindromo = () => {
  const regex = /[\W_]/gi;
  let entradaUsuario = textInput.value.replace(regex, "").toLowerCase();
  let entradaInvertida = entradaUsuario.split("").reverse().join("").toLowerCase();

  if (entradaUsuario === "") {
    alert("Por favor, insira um valor");
    return null;
  }

  if (entradaUsuario === entradaInvertida) {
    result.innerHTML = `<b>${textInput.value}</b> é um palíndromo`;
  } else {
    result.innerHTML = `<b>${textInput.value}</b> não é um palíndromo`;
  }

  console.log(entradaUsuario);
  console.log(entradaInvertida);
}

checkBtn.addEventListener("click", verificarPalindromo);
textInput.addEventListener("keyup", e => e.key === "Enter" ? verificarPalindromo() : null);
