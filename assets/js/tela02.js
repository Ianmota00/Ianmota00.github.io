// Obter o botão de alternância de modo escuro
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Adicionar um ouvinte de eventos para alternar o modo escuro
darkModeToggle.addEventListener('click', () => {
    // Alternar a classe 'dark-mode' no body
    document.body.classList.toggle('dark-mode');
    // Atualizar o texto do botão com base no estado do modo escuro
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Light Mode';
    } else {
        darkModeToggle.textContent = 'Dark Mode';
    }
});
