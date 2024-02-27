// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDON-GHUbFL6goqOzQ2iaLmoTf_XnRK364",
  authDomain: "sint-5508d.firebaseapp.com",
  projectId: "sint-5508d",
  storageBucket: "sint-5508d.appspot.com",
  messagingSenderId: "20313037276",
  appId: "1:20313037276:web:fa56e81bd5a04cd01b5719",
  measurementId: "G-GBP7LP45EJ"
};



if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página");
    window.location.href = "./assets/html/signin.html";
  }
  
  const userLogado = JSON.parse(localStorage.getItem("userLogado"));
  
  const logado = document.querySelector("#logado");
  logado.innerHTML = `Olá ${userLogado.nome}`;
  
  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "./assets/html/signin.html";
   
  }
  function entrar(){
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
  window.location.href = "./assets/html/tela02.html";
  }
    
  