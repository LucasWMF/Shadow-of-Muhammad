// Dados de conteúdo para diferentes idiomas
const contentLanguages = {
    Português: {
        navbar: ['Home', 'Conteúdos <i style="margin-left:1rem;" class="fa-solid fa-chevron-down arrow"></i>', 'Feedback'],
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
        titleAbout: ['Objetivo do esporte e características do espaço e material', 'Regras e modalidades', 'Modalidades e Especificidades no Boxe Olímpico', 'Curiosidades'],
        textAbout: {
            titulo1: [`No boxe, o objetivo principal é vencer o oponente por meio de um combate regulamentado, utilizando técnicas de socos. Existem duas formas principais de vitória: <br> <br>
            <b> Knockout (KO): </b> Quando um lutador derruba o oponente e ele não consegue se levantar antes do término da contagem do árbitro. <br> <br>
            <b> Decisão dos Juízes: </b> Se o combate vai até o final dos rounds estabelecidos, a vitória é decidida pelos juízes com base na pontuação dos golpes, controle do ringue e estratégia.`],
            titulo2: [`<b>Ringue do Boxe:</b> O espaço onde ocorrem os combates é um ringue quadrado, geralmente com medidas variando entre 4,9 a 7,3 metros de cada lado. O ringue é cercado por cordas para garantir que os lutadores permaneçam dentro da área designada. `],
            titulo3: [`<b>Materiais:</b> <br>
            <b>Luvas de Boxe:</b> Usadas para proteger as mãos dos lutadores e minimizar o risco de lesões nos oponentes. As luvas são acolchoadas e o tamanho varia conforme a categoria de peso e as regras específicas da luta. <br> <br>
            <b>Protetor Bucal:</b> Um dispositivo de proteção para os dentes e a mandíbula, que ajuda a evitar lesões dentárias e fraturas na mandíbula. <br> <br>`],
            titulo4: [`<b>Protetor de Corpo e Coquinho:</b> Para proteção adicional dos órgãos vitais e áreas sensíveis. É comum usar um colete protetor na prática, especialmente em treinos. <br> <br>
            <b>Calçado:</b> Os boxeadores usam tênis leves e antiderrapantes, projetados para proporcionar boa mobilidade e aderência ao ringue. <br> <br>
            <b>Saco de Pancadas e Equipamentos de Treino:</b> Durante o treinamento, os boxeadores usam sacos de pancadas, sacos speed (sacos de velocidade), e outros equipamentos para aprimorar a técnica e o condicionamento físico. <br>`],
            titulo5: [`O boxe olímpico, também conhecido como boxe amador, tem regras específicas que garantem a segurança dos competidores e a justiça na competição. Aqui estão as principais regras e modalidades associadas ao boxe olímpico: <br><br>
            <b>Objetivo:</b> O objetivo é vencer o combate através da pontuação de golpes limpos e eficazes ou, em alguns casos, por knockout (KO). <br><br>
            <b>Competição Olimpica:</b> Geralmente 3 rounds de 3 minutos cada, com 1 minuto de intervalo entre eles. <br> <br>`],
            titulo6: [`<b>Pontuação:</b> Baseada em golpes limpos e eficazes. O sistema de pontuação pode variar, mas tradicionalmente os juízes pontuam com base na clareza e no impacto dos golpes. Em competições mais recentes, a contagem é feita com base em um sistema eletrônico ou digital, onde cada golpe válido é registrado por um painel de juízes. <br><br>
            <b>Faltas e Penalidades:</b> Socos abaixo da cintura, na nuca ou nas costas da cabeça são proibidos. Agressões antidesportivas, como socos após o comando de “pare”, podem resultar em penalidades ou desqualificação. <br><br>
            <b>Vencedor:</b> O boxeador com mais pontos ao final dos 3 rounds é declarado vencedor. <br> Um boxeador pode vencer por desqualificação se o oponente cometer faltas graves ou repetidas.`],
            titulo7: [`<b>Categorias de Peso:</b> <br><br>
            <b>Maculino e Feminino:</b> Existem diferentes categorias de peso, variando de pesos leves a pesados. As categorias podem variar um pouco entre as competições internacionais e regionais. <br><br>
            <b>Divisões:</b> Categorias de peso são definidas para garantir que os competidores tenham tamanhos similares, minimizando a vantagem do peso.`],
            titulo8: [`<b>Boxe Feminino:</b> <br><br>
            <b>Semelhança com Masculino:</b> Segue as mesmas regras gerais do boxe olímpico masculino, com categorias de peso específicas para as mulheres.<br><br>
            <b>Inclusão Olímpica:</b> O boxe feminino foi incluído nos Jogos Olímpicos em 2012, e desde então segue as mesmas diretrizes e regras do boxe masculino.`],
            titulo9: [`<b>Variações na Regras:</b> <br><br>
            <b>AIBA:</b> A Federação Internacional de Boxe (AIBA) regula o boxe olímpico e suas regras podem ser ajustadas de tempos em tempos para atualizar o sistema de pontuação ou melhorar a segurança. <br><br>`],
            titulo10: [`<b>História Antiga:</b> O boxe é um dos esportes mais antigos, com evidências de sua prática datando de cerca de 3000 a.C. na Mesopotâmia. Ele também era popular na Grécia Antiga, onde fazia parte dos Jogos Olímpicos antigos.`]
        },
        titleOlympics: ['', '', '', '', ''],
        textOlympics: {
            titulo1: [``],
            titulo2: [``],
            titulo3: [``],
        },
        footerTitles: ['SOBRE O SITE', 'REDES SOCIAIS', 'ABAS'],
        footerTexts: ['Nossa escola online ensina as regras e modalidades do boxe olímpico, oferecendo conhecimento e treino para iniciantes e entusiastas.'],
        footerLinks: ['HOME', 'HISTÓRIA', 'SOBRE', 'OLÍMPIADAS', 'FEEDBACK'],
        footerCopy: ['Copyright (c) 2024 Shadow Of Muhammad Todos os direitos reservados Este produto é protegido por direitos autorais e distribuído sob licenças que restringem cópia, distribuição e descompilação.'],
    },
    English: {
        navbar: ['Home', 'Contents <i style="margin-left:1rem;" class="fa-solid fa-chevron-down arrow"></i>', 'Feedback'],
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
        titleAbout: ['Objective of the sport and characteristics of space and material', 'Rules and modalities', 'Modalities and Specificities in Olympic Boxing', 'Curiosities'],
        textAbout: {
            titulo1: [`In boxing, the main objective is to beat the opponent through regulated combat, using punching techniques. There are two main ways to win: <br> <br> 
            <b>Knockout (KO):</b> When a fighter knocks his opponent down and he is unable to get up before the referee's count ends. <br> <br>
            <b>Judges' Decision:</b> If the fight goes to the end of the established rounds, victory is decided by the judges based on the scoring of the blows, control of the ring and strategy. <br>`],
            titulo2: [`<b>Boxing Ring:</b> The space where the fights take place is a square ring, generally measuring between 4.9 and 7.3 meters on each side. The ring is surrounded by ropes to ensure that the wrestlers remain within the designated area.`],
            titulo3: [`<b>Materials:</b> <br>
            <b>Boxing Gloves:</b> Used to protect fighters' hands and minimize the risk of injury to opponents. The gloves are padded and the size varies depending on the weight category and the specific rules of the fight. <br> <br>
            <b>Mouthguard:</b> A protective device for the teeth and jaw that helps prevent tooth injuries and jaw fractures. <br> <br>`],
            titulo4: [`<b>Body and Coquinho Protector:</b> For additional protection of vital organs and sensitive areas. It is common to wear a protective vest in practice, especially in training. <br> <br>
            <b>Footwear:</b> Boxers wear lightweight, non-slip sneakers designed to provide good mobility and grip in the ring. <br> <br>
            <b>Punching Bags and Training Equipment:</b> During training, boxers use punching bags, speed bags, and other equipment to improve technique and physical conditioning. <br>`],
            titulo5: [`Olympic boxing, also known as amateur boxing, has specific rules that guarantee the safety of competitors and fairness in the competition. Here are the main rules and modalities associated with Olympic boxing: <br><br>
            <b>Objective:</b> The objective is to win the fight by scoring clean and effective blows or, in some cases, by knockout (KO). <br><br>
            <b>Olympic Competition:</b> Generally 3 rounds of 3 minutes each, with a 1-minute break between them. <br> <br>`],
            titulo6: [`<b>Score:</b> Based on clean and effective strikes. The scoring system can vary, but traditionally judges score based on the clarity and impact of the strikes. In more recent competitions, counting is done based on an electronic or digital system, where each valid blow is recorded by a panel of judges. <br><br>
            <b>Fouls and Penalties:</b> Punches below the waist, to the back of the head or to the back of the head are prohibited. Unsportsmanlike aggression, such as punches after the “stop” command, may result in penalties or disqualification. <br><br>
            <b>Winner:</b> The boxer with the most points at the end of the 3 rounds is declared the winner. <br> A boxer may win by disqualification if the opponent commits serious or repeated fouls.`],
        },
        titleOlympics: ['', '', '', '', ''],
        textOlympics: {
            titulo1: [``],
            titulo2: [``],
            titulo3: [``],
        },
        footerTitles: ['ABOUT THE SITE', 'SOCIAL MEDIA', 'TABS'],
        footerTexts: ['Our online school teaches the rules and disciplines of Olympic boxing, offering knowledge and training for beginners and enthusiasts.'],
        footerLinks: ['HOME', 'HISTORY', 'ABOUT', 'OLYMPICS', 'FEEDBACK'],
        footerCopy: ['Copyright (c) 2024 Shadow Of Muhammad All rights reserved. This product is protected by copyright and distributed under licenses that restrict copying, distribution, and decompilation.'],
    },
    Français: {
        navbar: ['Accueil', 'Contenus <i style="margin-left:1rem;" class="fa-solid fa-chevron-down arrow"></i>', 'Retour'],
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
        titleAbout: ['Franceis', '', '', '', ''],
        textAbout: {
            titulo1: [``],
            titulo2: [`<b>Ring de boxe :</b> L'espace où se déroulent les combats est un ring carré, mesurant généralement entre 4,9 et 7,3 mètres de côté. Le ring est entouré de cordes pour garantir que les lutteurs restent dans la zone désignée.`],
            titulo3: [``],
        },
        titleOlympics: ['', '', '', '', ''],
        textOlympics: {
            titulo1: [``],
            titulo2: [``],
            titulo3: [``],
        },
        footerTitles: ['À PROPOS DU SITE', 'RÉSEAUX SOCIAUX', 'ONGLETS'],
        footerTexts: ['Notre école en ligne enseigne les règles et les disciplines de la boxe olympique, offrant des connaissances et un entraînement pour les débutants et les passionnés.'],
        footerLinks: ['ACCUEIL', 'HISTOIRE', 'À PROPOS', 'OLYMPIQUES', 'RETOUR'],
        footerCopy: ['Copyright (c) 2024 Shadow Of Muhammad Tous droits réservés. Ce produit est protégé par des droits d\'auteur et distribué sous des licences qui restreignent la copie, la distribution et la décompilation.'],
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
    const navbarLinks = document.querySelectorAll('a.nav-link');

    for (let i = 0; i < navbarLinks.length; i++) {
        if (navbarLinks[i]) {
            navbarLinks[i].innerHTML = contentLanguages[language].navbar[i] || ''; // Atualiza cada link da navbar
        }
    }

    // Atualiza os links do menu suspenso (dropdown)
    const dropmenuLinks = document.querySelectorAll('a.dropdown-item');
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


    // Atualiza os textos da seção de História
    const historyTitles = document.querySelectorAll('.section-main .section-header .h1-history');
    const historyTexts = document.querySelectorAll('.section-main .section-content .p-history');
    const historySections = ['all', 'all', 'federation', 'brazil'];

    console.log('Total aboutTitle:', historyTitles.length);
    console.log(historyTitles)
    console.log('Total aboutText:', historyTexts.length);
    console.log(historyTexts)

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
                // console.log(sectionKey)
            } else if (historyTexts[i].classList.contains('p-history-2')) {
                historyTexts[i].innerText = contentLanguages[language].textHistory['all'][1] || ''; // Segundo texto da seção de História
                // console.log(sectionKey)
            } else {
                historyTexts[i].innerText = contentLanguages[language].textHistory[sectionKey][0] || ''; // Atualiza texto baseado na chave da seção
                // console.log(sectionKey)
            }
        }
    }

    const aboutTitles = document.querySelectorAll('.section-main .section-header .h1-about');
    const aboutTexts = document.querySelectorAll('.section-main .section-content .p-about');

    const aboutSections = ['titulo1', 'titulo2', 'titulo3', 'titulo4', 'titulo5', 'titulo6', 'titulo7', 'titulo8', 'titulo9', 'titulo10'];
    console.log('Total aboutTitle:', aboutTitles.length);
    console.log(aboutTitles)
    console.log('Total aboutText:', aboutTexts.length);
    console.log(aboutTexts)

    // Loop para atualizar títulos e textos das seções de História
    for (let i = 0; i < aboutSections.length; i++) {
        const sectionKey = aboutSections[i];

        if (aboutTitles[i]) {
            aboutTitles[i].innerHTML = contentLanguages[language].titleAbout[i] || ''; // Atualiza título da seção de História
        }

        if (aboutTexts[i]) {
            // Atualiza texto dependendo da classe do elemento
            aboutTexts[i].innerHTML = contentLanguages[language].textAbout[sectionKey][0] || ''; // Atualiza texto baseado na chave da seção
            // console.log(sectionKey)
        }
    }

    // Atualiza os textos do rodapé
    const footerTitles = document.querySelectorAll('h1.title-footer');
    const footerTexts = document.querySelectorAll('.footer-text');
    const footerLinks = document.querySelectorAll('.list-pages a');
    const footerCopy = document.querySelectorAll('.text-copy p');

    console.log(footerTitles);
    console.log(footerTexts);
    console.log(footerLinks);
    console.log(footerCopy);

    const footerTitlesKeys = ['sobre', 'redes_sociais', 'abas'];

    // Atualizando títulos do rodapé
    for (let i = 0; i < footerTitles.length; i++) {
        if (footerTitles[i] && contentLanguages[language].footerTitles[i]) {
            footerTitles[i].innerText = contentLanguages[language].footerTitles[i] || '';
        }
    }

    // Atualizando textos do rodapé
    for (let i = 0; i < footerTexts.length; i++) {
        if (footerTexts[i] && contentLanguages[language].footerTexts[i]) {
            footerTexts[i].innerText = contentLanguages[language].footerTexts[i] || '';
        }
    }

    // Atualizando links do rodapé
    for (let i = 0; i < footerLinks.length; i++) {
        if (footerLinks[i] && contentLanguages[language].footerLinks[i]) {
            footerLinks[i].innerText = contentLanguages[language].footerLinks[i] || '';
        }
    }

    // Atualizando cópias do rodapé
    for (let i = 0; i < footerCopy.length; i++) {
        if (footerCopy[i] && contentLanguages[language].footerCopy[i]) {
            footerCopy[i].innerText = contentLanguages[language].footerCopy[i] || '';
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
