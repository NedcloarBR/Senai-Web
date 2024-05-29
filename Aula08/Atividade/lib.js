function login() {
  const correctUsername = 'brasil';
  const correctPassword = '123';
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');
  const welcomeButton = document.getElementById('welcome-button');

  if (username === correctUsername && password === correctPassword) {
      errorMessage.textContent = '';
      welcomeButton.style.display = 'block';
  } else {
      errorMessage.textContent = 'Usuário ou senha incorretos. Tente novamente.';
      welcomeButton.style.display = 'none';
  }
}

function openWelcomePage() {
  window.open('', '', 'width=300,height=200').document.write('<h1>Seja Bem-vindo</h1>');
}