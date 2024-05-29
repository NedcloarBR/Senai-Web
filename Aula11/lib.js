function validar() {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const gender = document.getElementById("gender");

  if(!firstName.value) {
    alert("O primeiro nome não pode ser vazio!");
    firstName.focus();
    return false;
  }
  if(!lastName.value) {
    alert("O último nome não pode ser vazio!");
    lastName.focus();
    return false;
  }if(!email.value) {
    alert("O email não pode ser vazio!");
    email.focus();
    return false;
  }if(!gender.checked) {
    alert("O gênero nome não pode ser vazio!");
    return false;
  }

  return true;
}

function redefinir() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("gender").checked = false;
}

function relatorio() {
  let tabela = '<table border="3"><tr><th> Aluno </th><th>Nota</th></tr>';
  for(let i = 1; i< 20; i++) {
    const nota = Math.floor(Math.random() * 101)
    tabela += `<tr><th> Aluno: ${i} </th><th>Nota: ${nota}</th></tr>`
  }

  tabela += "</table>"

  document.getElementById("relatorio").innerHTML = tabela;
}