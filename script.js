function showRegistrationScreen() {
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('registration-screen').classList.remove('hidden');
  }
  
  function showLoginScreen() {
    document.getElementById('registration-screen').classList.add('hidden');
    document.getElementById('login-screen').classList.remove('hidden');
  }