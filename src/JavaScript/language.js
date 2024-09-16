// Dados de conteúdo para diferentes idiomas
const contentLanguages = {
    Português: {
        navbar: ['Home', 'Conteúdos', 'História', 'Modalidades', 'Ranking', 'Feedback'],
        title: ['Introdução Boxe Olímpico', 'História do Boxe e Federação', 'Modalidades e Regras', 'Melhores Competidores', 'Curiosidades e Benefícios', 'Feedback'],
        textSummary: {
            'Introdução': ['O boxe olímpico é uma modalidade de combate que faz parte dos Jogos Olímpicos desde 1904 para homens e 2012 para mulheres. As lutas ocorrem em três rounds e os atletas utilizam luvas, capacete e protetor bucal. A vitória pode ser por nocaute, decisão dos juízes ou interrupção médica. As categorias são divididas por peso, e o foco é na técnica, rapidez e precisão dos golpes. O esporte promove fair play e possui regras rigorosas para a segurança dos lutadores.'],
            'História do Boxe e Federação': ['O boxe, originado na Grécia Antiga e incluído nos Jogos Olímpicos desde 688 a.C., ressurgiu na Inglaterra no século XVIII com as "Regras de Queensberry" (1867). Estreou nos Jogos Olímpicos modernos em 1904, com categorias femininas adicionadas em 2012. A Federação Internacional de Boxe Amador (FIBA), criada em 1920 e substituída pela AIBA em 1946, foi descredenciada pelo COI, mas o boxe ainda está presente nos Jogos. No Brasil, o boxe ganhou destaque no final do século XIX e com conquistas internacionais como a de Eder Jofre e Robson Conceição.'],
            'Modalidades e Regras': ['O boxe olímpico, ou amador, tem como objetivo vencer por pontos ou knockout (KO). A competição inclui 3 rounds de 3 minutos cada, com intervalos de 1 minuto. Os boxeadores usam luvas maiores (10-12 onças), capacete e protetor bucal. A pontuação é dada com base em golpes limpos e eficazes, com juízes ou sistemas eletrônicos. Faltas incluem golpes abaixo da cintura e comportamentos antidesportivos. O vencedor pode ser decidido por pontos ou desqualificação. As modalidades incluem pesos mosca, pena, leve, meio-médio, médio, pesado e superpesado, tanto para homens quanto para mulheres. O boxe feminino foi adicionado aos Jogos Olímpicos em 2012. A AIBA regula as regras, que podem variar em competições regionais e nacionais.'],
            'Melhores Competidores': ['Texto sobre melhores competidores em Português'],
            'Curiosidades e Benefícios': ['Texto sobre curiosidades e benefícios em Português']
        }
    },
    English: {
        navbar: ['Home', 'Contents', 'History', 'Formats', 'Ranking', 'Feedback'],
        title: ['Olympic Boxing Introduction', 'History of Boxing and Federation', 'Modalities and Rules', 'Best Competitors', 'Curiosities and Benefits', 'Feedback'],
        textSummary: {
            'Introdução': ['Introduction text in English'],
            'História do Boxe e Federação': ['Text about boxing history in English'],
            'Modalidades e Regras': ['Text about modalities and rules in English'],
            'Melhores Competidores': ['Text about best competitors in English'],
            'Curiosities and Benefits': ['Text about curiosities and benefits in English']
        }
    },
    Français: {
        navbar: ['Accueil', 'Contenus', 'Histoire', 'Formats', 'Classement', 'Retour'],
        title: ['Introduction Boxe Olympique', 'Histoire de la boxe et de la fédération', 'Modalités et règles', 'Meilleurs compétiteurs', 'Curiosités et avantages', 'Retours'],
        textSummary: {
            'Introdução': ['Texte d\'introduction en Français'],
            'História do Boxe e Federação': ['Texte sur l\'histoire de la boxe en Français'],
            'Modalidades e Regras': ['Texte sur les modalités et les règles en Français'],
            'Melhores Competidores': ['Texte sur les meilleurs compétiteurs en Français'],
            'Curiosities and Benefits': ['Texte sur les curiosités et avantages en Français']
        }
    }
};

// Função para atualizar o conteúdo com base na linguagem selecionada
function contentLanguage(language) {
    language = {
        'ptBR': 'Português',
        'en': 'English',
        'fr': 'Français'
    }[language] || 'Português';

    // Atualiza os textos das seções
    const titles = document.querySelectorAll('.section-header h1');
    const texts = document.querySelectorAll('.section-content p');

    const sectionKeys = ['Introdução', 'História do Boxe e Federação', 'Modalidades e Regras', 'Melhores Competidores'];
    for (let i = 0; i < titles.length; i++) {
        titles[i].innerText = contentLanguages[language].title[i];
        texts[i].innerText = contentLanguages[language].textSummary[sectionKeys[i]] ? contentLanguages[language].textSummary[sectionKeys[i]][0] : '';
    }
}

// Executa a função ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.querySelector('.list-item-select select');
    contentLanguage(selectElement.value); // Define o idioma padrão ao carregar
});
