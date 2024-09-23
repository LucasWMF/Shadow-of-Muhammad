// Dados de conteúdo para diferentes idiomas
const contentLanguages = {
    Português: {
        navbar: ['Home', 'Conteúdos <i class="fa-solid fa-chevron-down"></i>', 'Feedback'],
        dropnavbar: ['História', 'Sobre', 'Olímpiadas'],
        title: ['Introdução Boxe Olímpico', 'História do Boxe e Federação', 'Modalidades e Regras', 'Melhores Competidores', 'Curiosidades e Benefícios', 'Feedback'],
        textSummary: {
            'Introdução': ['O boxe olímpico é uma modalidade de combate que faz parte dos Jogos Olímpicos desde 1904 para homens e 2012 para mulheres. As lutas ocorrem em três rounds e os atletas utilizam luvas, capacete e protetor bucal. A vitória pode ser por nocaute, decisão dos juízes ou interrupção médica. As categorias são divididas por peso, e o foco é na técnica, rapidez e precisão dos golpes. O esporte promove fair play e possui regras rigorosas para a segurança dos lutadores.'],
            'História do Boxe e Federação': ['O boxe, originado na Grécia Antiga e incluído nos Jogos Olímpicos desde 688 a.C., ressurgiu na Inglaterra no século XVIII com as "Regras de Queensberry" (1867). Estreou nos Jogos Olímpicos modernos em 1904, com categorias femininas adicionadas em 2012. A Federação Internacional de Boxe Amador (FIBA), criada em 1920 e substituída pela AIBA em 1946, foi descredenciada pelo COI, mas o boxe ainda está presente nos Jogos. No Brasil, o boxe ganhou destaque no final do século XIX e com conquistas internacionais como a de Eder Jofre e Robson Conceição.'],
            'Modalidades e Regras': ['O boxe olímpico, ou amador, tem como objetivo vencer por pontos ou knockout (KO). A competição inclui 3 rounds de 3 minutos cada, com intervalos de 1 minuto. Os boxeadores usam luvas maiores (10-12 onças), capacete e protetor bucal. A pontuação é dada com base em golpes limpos e eficazes, com juízes ou sistemas eletrônicos. Faltas incluem golpes abaixo da cintura e comportamentos antidesportivos. O vencedor pode ser decidido por pontos ou desqualificação. As modalidades incluem pesos mosca, pena, leve, meio-médio, médio, pesado e superpesado, tanto para homens quanto para mulheres. O boxe feminino foi adicionado aos Jogos Olímpicos em 2012. A AIBA regula as regras, que podem variar em competições regionais e nacionais.'],
            'Melhores Competidores': ['Texto sobre melhores competidores em Português'],
            'Curiosidades e Benefícios': ['Texto sobre curiosidades e benefícios em Português']
        },
        buttonMore: 'Ver Mais',
        pageList: ['Home', 'História', 'Sobre', 'Olímpiadas', 'Feedback'],
        // Página de História
        titleHistory: ['História do Boxe', 'Federação do Boxe', 'Boxe no Brasil'],
        textHistory: {
            all: [`O boxe é um dos esportes de combate mais antigos, com origem na Grécia Antiga, onde foi incluído nos Jogos Olímpicos em 688 a.C. Na época, o boxe era praticado como parte do treinamento militar e disputado por atletas nus. O primeiro campeão olímpico registrado foi Onosmastos de Esmirna. O esporte passou por um período de declínio após a queda do Império Romano, mas ressurgiu na Inglaterra do século XVIII com o estabelecimento das "Regras de Queensberry" em 1867, que padronizaram o esporte, incluindo o uso de luvas e rounds cronometrados. 
                
            Na era moderna, o boxe olímpico estreou nos Jogos Olímpicos de St. Louis, em 1904, com sete categorias de peso. O esporte é praticado exclusivamente por pugilistas amadores e possui regras específicas para garantir a segurança dos atletas, como o uso de capacetes (para mulheres) e outros equipamentos de proteção. Em 1920, a Federação Internacional de Boxe Amador (FIBA) foi criada e substituída, em 1946, pela Associação Internacional de Boxe Amador (AIBA), que regulou o esporte por décadas até enfrentar controvérsias recentes e perder o reconhecimento do Comitê Olímpico Internacional (COI).`,
                `O boxe feminino só foi introduzido nos Jogos Olímpicos de Londres 2012. Em 2024, o esporte será disputado em 13 categorias (7 masculinas e 6 femininas), com 248 atletas competindo. Grandes potências no esporte incluem os Estados Unidos e Cuba, que possuem um histórico de sucesso olímpico notável, com múltiplos campeões como Teófilo Stevenson e Félix Savón. 
            
            No Brasil, o boxe ganhou destaque no final do século XIX e consolidou-se com atletas como Eder Jofre e Acelino "Popó" Freitas. Em 2016, Robson Conceição fez história ao conquistar o primeiro ouro olímpico do país na modalidade, consolidando o boxe como uma importante disciplina no cenário esportivo brasileiro.`
            ],
            federation: [`A Federação Internacional de Boxe Amador (FIBA), fundada em 1920, tinha como objetivo principal regulamentar o boxe em nível global, promovendo a uniformidade nas regras e condições de competição. Em 1946, a FIBA foi sucedida pela Associação Internacional de Boxe Amador (AIBA), que continuou esse trabalho e também se encarregou de organizar competições internacionais, incluindo os Jogos Olímpicos.

            A AIBA, ao longo dos anos, enfrentou desafios e controvérsias, principalmente relacionadas à gestão do esporte e à transparência. Essas questões culminaram na descredenciação da AIBA pelo Comitê Olímpico Internacional (COI) em 2019, embora o boxe ainda faça parte dos Jogos Olímpicos. A organização tem se esforçado para recuperar sua reputação e reintegrar-se ao sistema olímpico.
                
            Recentemente, a AIBA passou a ser vista com desconfiança devido a alegações de corrupção e má administração. Apesar disso, o boxe continua a ser uma modalidade popular, tanto em nível amador quanto profissional, e a AIBA ainda organiza campeonatos e eventos significativos ao redor do mundo.`],
            brazil: ['O boxe no Brasil começou a ganhar popularidade no final do século XIX, especialmente em cidades como São Paulo e Rio de Janeiro. Eder Jofre, campeão mundial dos pesos-galos na década de 1950, foi uma figura crucial para o reconhecimento do boxe brasileiro no cenário internacional. Ele é conhecido por sua técnica e poder de nocaute, acumulando um impressionante recorde em sua carreira. Nos anos 1990 e 2000, Acelino "Popó" Freitas trouxe novos holofotes ao boxe nacional, conquistando títulos mundiais em categorias como super-featherweight e lightweight. Uma das conquistas mais importantes foi em 2016, quando Robson Conceição se tornou o primeiro brasileiro a ganhar uma medalha de ouro olímpica no boxe, durante os Jogos do Rio de Janeiro. O esporte continua a crescer no Brasil, com uma nova geração de boxeadores competindo em nível internacional, apesar dos desafios em termos de apoio institucional e financeiro.']
        },
        titleAbout: ['','','','',''],
        textAbout: {
            titulo1: [``],
            titulo2: [``],
            titulo3: [``],
        },
        titleOlympics: ['','','','',''],
        textOlympics: {
            titulo1: [``],
            titulo2: [``],
            titulo3: [``],
        }
    },
    English: {
        navbar: ['Home', 'Contents <i class="fa-solid fa-chevron-down"></i>', 'Feedback'],
        dropnavbar: ['History', 'About', 'Olympics'],
        title: ['Olympic Boxing Introduction', 'History of Boxing and Federation', 'Modalities and Rules', 'Best Competitors', 'Curiosities and Benefits', 'Feedback'],
        textSummary: {
            'Introdução': ['Introduction text in English'],
            'História do Boxe e Federação': ['Text about boxing history in English'],
            'Modalidades e Regras': ['Text about modalities and rules in English'],
            'Melhores Competidores': ['Text about best competitors in English'],
            'Curiosities and Benefits': ['Text about curiosities and benefits in English']
        },
        buttonMore: 'Read More',
        titleHistory: ['History of Boxing', 'Federation of Boxing', 'Boxing in Brazil'],
        textHistory: {
            all: ['English text about the history of boxing.'],
            federation: ['English text about the boxing federation.'],
            brazil: ['English text about boxing in Brazil.'],
        },
        titleAbout: ['','','','',''],
        textAbout: {
            titulo1: [``],
            titulo2: [``],
            titulo3: [``],
        },
        titleOlympics: ['','','','',''],
        textOlympics: {
            titulo1: [``],
            titulo2: [``],
            titulo3: [``],
        }
    },
    Français: {
        navbar: ['Accueil', 'Contenus <i class="fa-solid fa-chevron-down"></i>', 'Retour'],
        dropnavbar: ['Histoire', 'Sur', 'Olympiques'],
        title: ['Introduction Boxe Olympique', 'Histoire de la boxe et de la fédération', 'Modalités et règles', 'Meilleurs compétiteurs', 'Curiosités et avantages', 'Retours'],
        textSummary: {
            'Introdução': ['Texte d\'introduction en Français'],
            'História do Boxe e Federação': ['Texte sur l\'histoire de la boxe en Français'],
            'Modalidades e Regras': ['Texte sur les modalités et les règles en Français'],
            'Melhores Competidores': ['Texte sur les meilleurs compétiteurs en Français'],
            'Curiosities and Benefits': ['Texte sur les curiosités et avantages en Français']
        },
        buttonMore: 'Voir Plus',
        titleHistory: ['Histoire de la boxe', 'Fédération de la boxe', 'Boxe au Brésil'],
        textHistory: {
            all: ['Texte sur l\'histoire de la boxe.'],
            federation: ['Texte sur la fédération de boxe.'],
            brazil: ['Texte sur le boxe au Brésil.'],
        },
        titleAbout: ['','','','',''],
        textAbout: {
            titulo1: [``],
            titulo2: [``],
            titulo3: [``],
        },
        titleOlympics: ['','','','',''],
        textOlympics: {
            titulo1: [``],
            titulo2: [``],
            titulo3: [``],
        }
    }
};

// Função que atualiza o conteúdo da página com base no idioma escolhido
function contentLanguage(language) {
    // Atualiza os textos das seções principais
    const titles = document.querySelectorAll('.section-main .section-header h1');
    const texts = document.querySelectorAll('.section-main .section-content p');

    // Chaves das seções principais
    const sectionKeysSummary = ['Introdução', 'História do Boxe e Federação', 'Modalidades e Regras', 'Melhores Competidores', 'Curiosidades e Benefícios'];

    // Loop para atualizar títulos e textos
    for (let i = 0; i < titles.length; i++) {
        if (titles[i]) {
            titles[i].innerHTML = contentLanguages[language].title[i] || ''; // Atualiza o título
        }
        if (texts[i]) {
            texts[i].innerText = contentLanguages[language].textSummary[sectionKeysSummary[i]] ? contentLanguages[language].textSummary[sectionKeysSummary[i]][0] : ''; // Atualiza o texto
        }
    }

    // Atualiza os links da navbar
    const navbarLinks = document.querySelectorAll('.navbar-list .navbar-link');

    for (let i = 0; i < navbarLinks.length; i++) {
        if (navbarLinks[i]) {
            navbarLinks[i].innerHTML = contentLanguages[language].navbar[i] || ''; // Atualiza cada link da navbar
        }
    }

    // Atualiza os links do menu suspenso (dropdown)
    const dropmenuLinks = document.querySelectorAll('.cascata-conteudo a');
    const dropmenuItems = contentLanguages[language].dropnavbar;

    for (let i = 0; i < dropmenuLinks.length; i++) {
        if (dropmenuLinks[i]) {
            dropmenuLinks[i].innerText = dropmenuItems[i] || ''; // Atualiza cada item do menu suspenso
        }
    }

    // Atualiza o texto do botão "Ver Mais"
    const buttonMoreList = document.querySelectorAll('.button-more a');
    buttonMoreList.forEach(button => {
        if (button) {
            button.innerText = contentLanguages[language].buttonMore || ''; // Atualiza o texto do botão
        }
    });

    // Footer
    const linkPagesList = document.querySelectorAll('.item-list-pages a');

    // Verifica se foram encontrados links
    for (let i = 0; i < linkPagesList.length; i++) {
        if (linkPagesList[i]) {
            linkPagesList[i].innerHTML = contentLanguages[language].pageList[i] || ''; // Atualiza cada link da navbar
        }
    }

    // Atualiza os textos da seção de História
    const historyTitles = document.querySelectorAll('.section-main .section-header .h1-history');
    const historyTexts = document.querySelectorAll('.section-main .section-content .p-history');

    const historySections = ['all', 'all', 'federation', 'brazil'];
    console.log('Total historyTitles:', historyTitles.length);
    console.log('Total historyTexts:', historyTexts.length);

    // Loop para atualizar títulos e textos das seções de História
    for (let i = 0; i < historySections.length; i++) {
        const sectionKey = historySections[i];

        if (historyTitles[i]) {
            historyTitles[i].innerText = contentLanguages[language].titleHistory[i] || ''; // Atualiza título da seção de História
        }

        if (historyTexts[i]) {
            // Atualiza texto dependendo da classe do elemento
            if (historyTexts[i].classList.contains('p-history-1')) {
                historyTexts[i].innerText = contentLanguages[language].textHistory['all'][0] || ''; // Primeiro texto da seção de História
                console.log(sectionKey)
            } else if (historyTexts[i].classList.contains('p-history-2')) {
                historyTexts[i].innerText = contentLanguages[language].textHistory['all'][1] || ''; // Segundo texto da seção de História
                console.log(sectionKey)
            } else {
                historyTexts[i].innerText = contentLanguages[language].textHistory[sectionKey][0] || ''; // Atualiza texto baseado na chave da seção
                console.log(sectionKey)
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.querySelector('.form-select'); // Seleciona o elemento correto

    // Verifica se o select existe e possui um valor
    if (selectElement && selectElement.value) {
        contentLanguage(selectElement.value); // Define o idioma padrão ao carregar
    }

    // Adiciona evento para mudança de idioma
    selectElement.addEventListener('change', (event) => {
        contentLanguage(event.target.value); // Atualiza o conteúdo com o novo idioma selecionado
    });
});