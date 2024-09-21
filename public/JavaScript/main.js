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