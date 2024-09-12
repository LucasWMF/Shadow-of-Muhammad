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

// Variáveis de Texto

let contentLanguages = {
    navbar: {
        'Português': ['Home', 'Conteúdos', 'História', 'Modalidades', 'Ranking', 'Feedback'],
        'English': ['Home', 'Contents', 'History', 'Formats', 'Ranking', 'Feedback'],
        'Français': ['Accueil', 'Contenus', 'Histoire', 'Formats', 'Classement', 'Retour']
    },

    title: {
        'Português': ['Introdução', 'História do Boxe e Federação', 'Modalidades e Regras', 'Melhores Competidores', 'Curiosidades e Benefícios', 'Feedback'],
        'English': ['Introduction', 'History of Boxing and Federation', 'Modalities and Rules', 'Best Competitors', 'Curiosities and Benefits', 'Feedback'],
        'Français': ['Introduction', 'Histoire de la boxe et de la fédération', 'Modalités et règles', 'Meilleurs compétiteurs', 'Curiosités et avantages', 'Retours']
    },
    
    textSummary: {
        'Português': {
            'Introdução': [],
            'História do Boxe e Federação': [],
            'Modalidades e Regras': [],
            'Melhores Competidores': [],
            'Curiosidades e Benefícios': []
        },
        'English': {
            'Introduction': [],
            'História do Boxe e Federação': [],
            'Modalidades e Regras': [],
            'Melhores Competidores': [],
            'Curiosidades e Benefícios': []
        },
        'Français': {
            'Introdução': [],
            'História do Boxe e Federação': [],
            'Modalidades e Regras': [],
            'Melhores Competidores': [],
            'Curiosidades e Benefícios': []
        },
    },

    text: {
        'Português': {
            'História': [],
            'Modalidade': [],
            'Melhores Competidores': [],
            'Ranking': [],
            'Olímpiadas 2024': []
        },
    },
}

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

document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.querySelector('select');

    // Função para abrir o menu
    function openSelect() {
        selectElement.focus();
        // Simula a abertura do menu dropdown
        selectElement.size = selectElement.options.length;
    }

    // Função para fechar o menu
    function closeSelect() {
        selectElement.size = 1;
    }

    // Adiciona os ouvintes de evento
    selectElement.addEventListener('mouseover', openSelect);
    selectElement.addEventListener('mouseout', closeSelect);
});