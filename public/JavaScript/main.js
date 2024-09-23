// Mudar o Título quando fora da página

let docTitle = document.title
// let docFaviIcon = document.querySelector("link[rel*='icon']");

window.addEventListener("blur", () => {
    document.title = "Volte a Aprender!";
    // docFaviIcon.href = '/image/dowload_1'

});

window.addEventListener("focus", () => {
    document.title = docTitle
    // docFaviIcon.href = docFaviIcon;
})

function toggleNavbar() {
    const navbarList = document.querySelector('.navbar-list');
    navbarList.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.getElementsByClassName('navbar-toggler');

    if (toggleButtons.length > 0) {
        // Adiciona o evento apenas se o botão existir
        for (let i = 0; i < toggleButtons.length; i++) {
            toggleButtons[i].addEventListener('click', function () {
                this.classList.toggle('active');

                if (this.classList.contains('active')) {
                    this.innerHTML = '<i class="fa-solid fa-times"></i>';
                    console.log('B')
                } else {
                    this.innerHTML = '<i class="fa-solid fa-bars"></i>';
                    console.log('A')
                }
            });
        }
    } else {
        console.error("Nenhum elemento encontrado com a classe 'navbarToggle'");
    }
});

console.log('A')

// document.addEventListener('DOMContentLoaded', () => {
//     const languageSelect = document.getElementById('list-item-select');

//     // Função para aplicar a linguagem selecionada
//     function applyLanguage(language) {
//         // Aqui você pode adicionar lógica para mudar o conteúdo da página com base na linguagem
//         console.log('Linguagem selecionada:', language); // Exemplo de uso

//         // Exemplo de como você pode aplicar a linguagem, alterando o conteúdo da página
//         // document.body.setAttribute('lang', language); // Defina o atributo lang no body, se necessário
//     }

//     // Carregar a linguagem do localStorage, se existir
//     const savedLanguage = localStorage.getItem('language');
//     if (savedLanguage) {
//         languageSelect.value = savedLanguage; // Define o valor do select para a linguagem salva
//         applyLanguage(savedLanguage); // Aplica a linguagem salva
//     }

//     // Salva a linguagem selecionada no localStorage quando o usuário faz uma escolha
//     languageSelect.addEventListener('change', () => {
//         const selectedLanguage = languageSelect.value;
//         localStorage.setItem('language', selectedLanguage);
//         applyLanguage(selectedLanguage); // Aplica a linguagem selecionada
//     });
// });