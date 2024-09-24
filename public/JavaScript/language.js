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
            <b>AIBA:</b> A Federação Internacional de Boxe (AIBA) regula o boxe olímpico e suas regras podem ser ajustadas de tempos em tempos para atualizar o sistema de pontuação ou melhorar a segurança.`],
            titulo10: [`<b>História Antiga:</b> O boxe é um dos esportes mais antigos, com evidências de sua prática datando de cerca de 3000 a.C. na Mesopotâmia. Ele também era popular na Grécia Antiga, onde fazia parte dos Jogos Olímpicos antigos. <br><br>
            <b>Luvas de Boxe:</b> Originalmente, os boxeadores lutavam sem luvas, usando apenas bandagens nas mãos. As luvas foram introduzidas para proteger tanto os lutadores quanto para evitar lesões graves.`],
            titulo11: [`<b>O Maior Knockout da História:</b> O recorde de maior tempo entre um golpe e a contagem final de um knockout pertence a Jack Dempsey, que nocauteou Jess Willard no primeiro round de um combate em 1919. Dempsey foi famoso por sua potência de soco. <br><br>
            <b>Boxe no Cinema:</b> O boxe tem sido um tema popular no cinema, com filmes icônicos como "Rocky" (1976), que conta a história de um boxeador amador que tem uma chance de lutar pelo título mundial. O sucesso do filme levou a uma série de sequências e spin-offs, incluindo a série "Creed".`]
        },
        titleOlympics: ['BOXE OLÍMPICO', 'RANKING', 'Jogos Olímpicos de Pequim 2008', 'Jogos Olímpicos de Londres 2012', 'Jogos Olímpicos de Rio 2016', 'Jogos Olímpicos de Tóquio 2020 (realizados em 2021)', 'Jogos Olímpicos de Pequim 2022 (Jogos de Inverno, o boxe não faz parte dos Jogos de Inverno)'],
        textOlympics: {
            titulo1: [`O boxe olímpico é uma modalidade de combate que faz parte dos Jogos Olímpicos desde 1904 para homens e 2012 para mulheres. As lutas ocorrem em três rounds e os atletas utilizam luvas, capacete e protetor bucal. A vitória pode ser por nocaute, decisão dos juízes ou interrupção médica. As categorias são divididas por peso, e o foco é na técnica, rapidez e precisão dos golpes. O esporte promove fair play e possui regras rigorosas para a segurança dos lutadores.`],
            titulo2: [`
                <ol>
                    <li> <b>Cuba:</b> 9 Medalhas (3 Ouro, 4 Prata, 2 Bronze)</li>
                    <li> <b>Estados Unidos:</b> 8 medalhas (2 ouro, 2 prata, 4 bronze)</li>
                    <li> <b>Grã-Bretanha:</b> 4 medalhas (1 ouro, 3 bronze)</li>
                    <li> <b>Ucrânia:</b> 4 medalhas (1 ouro, 1 prata, 2 bronze)</li>
                    <li> <b>Turquia:</b> 3 medalhas (1 ouro, 1 prata, 1 bronze)</li>
                </ol>`],
            titulo3: [`
                <ol>
                    <li> <b>Cuba:</b> 7 Medalhas (3 Ouro, 3 Prata, 1 Bronze)</li>
                    <li> <b>Grã-Bretanha:</b> 7 medalhas (3 ouro, 1 prata, 3 bronze)</li>
                    <li> <b>Estados Unidos:</b> 6 medalhas (2 ouro, 1 prata, 3 bronze)</li>
                    <li> <b>Uzbequistão:</b> 5 medalhas (2 ouro, 1 prata, 2 bronze)</li>
                    <li> <b>Azerbaijão:</b> 5 medalhas (2 ouro, 1 prata, 2 bronze)</li>
                </ol>`],
            titulo4: [`
                <ol>
                    <li> <b>Cuba:</b> 7 medalhas (4 ouro, 2 prata, 1 bronze)</li>
                    <li> <b>Estados Unidos:</b> 6 medalhas (1 ouro, 3 prata, 2 bronze) </li>
                    <li> <b>Grã-Bretanha:</b> 6 medalhas (2 ouro, 2 prata, 2 bronze) </li>
                    <li> <b>Uzbequistão:</b> 4 medalhas (2 ouro, 1 prata, 1 bronze) </li>
                    <li> <b>China:</b> 4 medalhas (1 ouro, 2 prata, 1 bronze) </li>
                </ol>`],
            titulo5: [`
                <ol>
                    <li> <b>Cuba:</b> 6 medalhas (4 ouro, 2 prata) </li>
                    <li> <b>Estados Unidos:</b> 6 medalhas (1 ouro, 3 prata, 2 bronze) </li>
                    <li> <b>Uzbequistão:</b> 5 medalhas (1 ouro, 3 prata, 1 bronze) </li>
                    <li> <b>Grã-Bretanha:</b> 4 medalhas (1 ouro, 2 prata, 1 bronze) </li>
                    <li> <b>Filipinas:</b> 2 medalhas (1 ouro, 1 prata) </li>
                </ol>`],
            titulo6: [`
            Não há Jogos Olímpicos de Verão em 2022, pois a competição de boxe faz parte dos JogosOlímpicos de Verão, realizados a cada quatro anos. <br> Esses rankings refletem o desempenho dos países no boxe durante os Jogos Olímpicos de Verão de 2008 a 2020. A lista pode variar ligeiramente de acordo com a fonte e a atualização dos resultados.`],
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
            titulo7: [`<b>Weight Classes:</b> <br><br>
            <b>Male and Female:</b> There are different weight classes, ranging from lightweight to heavyweight. The classes may vary slightly between international and regional competitions. <br><br>
            <b>Divisions:</b> Weight classes are set to ensure that competitors are similar in size, minimizing weight advantage.`],
            titulo8: [`<b>Women's Boxing:</b> <br><br>
            <b>Similarity to Men's:</b> Follows the same general rules as men's Olympic boxing, with specific weight classes for women.<br><br>
            <b>Olympic Inclusion:</b> Women's boxing was included in the Olympic Games in 2012, and has since followed the same guidelines and rules as men's boxing.`],
            titulo9: [`<b>Rules Variations:</b> <br><br>
            <b>AIBA:</b> The International Boxing Federation (AIBA) regulates Olympic boxing, and its rules may be adjusted from time to time to update the scoring system or improve safety.`],
            titulo10: [`<b>Early History:</b> Boxing is one of the oldest sports, with evidence of its practice dating back to around 3000 BC in Mesopotamia. It was also popular in Ancient Greece, where it was part of the ancient Olympic Games. <br><br>
            <b>Boxing Gloves:</b> Originally, boxers fought without gloves, using only bandages on their hands. Gloves were introduced to both protect the fighters and prevent serious injuries.`],
            titulo11: [`<b>The Greatest Knockout in History:</b> The record for the longest time between a blow and the final count of a knockout is held by Jack Dempsey, who knocked out Jess Willard in the first round of a fight in 1919. Dempsey was famous for his punching power. <br><br>
            <b>Boxing in Film:</b> Boxing has long been a popular theme in cinema, with iconic films such as "Rocky" (1976), which tells the story of an amateur boxer who gets a shot at the world title. The film's success led to a number of sequels and spin-offs, including the "Creed" series.`]
        },
        titleOlympics: ['OLYMPIC BOXING', 'RANKING', 'Beijing Olympics 2008', 'London Olympics 2012', 'Rio Olympics 2016', 'Tokyo Olympics 2020 (held in 2021)', 'Beijing Olympics 2022 (Winter Games, boxing is not part of the Winter Games)'],
        textOlympics: {
            titulo1: [`Olympic boxing is a combat sport that has been part of the Olympic Games since 1904 for men and 2012 for women. Fights take place over three rounds and athletes wear gloves, helmets and mouth guards. Victory can be by knockout, judges' decision or medical stoppage. The categories are divided by weight, and the focus is on technique, speed and precision of punches. The sport promotes fair play and has strict rules for the safety of fighters.`],
            titulo2: [`
            <ol>
                <li> <b>Cuba:</b> 9 Medals (3 Gold, 4 Silver, 2 Bronze)</li>
                <li> <b>United States:</b> 8 Medals (2 Gold, 2 Silver, 4 Bronze)</li>
                <li> <b>Great Britain:</b> 4 Medals (1 Gold, 3 Bronze)</li>
                <li> <b>Ukraine:</b> 4 Medals (1 Gold, 1 Silver, 2 Bronze)</li>
                <li> <b>Turkey:</b> 3 Medals (1 Gold, 1 Silver, 1 Bronze)</li>
            </ol>`],
            titulo3: [`
            <ol>
                <li> <b>Cuba:</b> 7 Medals (3 Gold, 3 Silver, 1 Bronze)</li>
                <li> <b>Great Britain:</b> 7 medals (3 gold, 1 silver, 3 bronze)</li>
                <li> <b>United States:</b> 6 medals (2 gold, 1 silver, 3 bronze)</li>
                <li> <b>Uzbekistan:</b> 5 medals (2 gold, 1 silver, 2 bronze)</li>
                <li> <b>Azerbaijan:</b> 5 medals (2 gold, 1 silver, 2 bronze)</li>
            </ol>`],
            titulo4: [`
            <ol>
                <li> <b>Cuba:</b> 7 medals (4 gold, 2 silver, 1 bronze)</li>
                <li> <b>United States:</b> 6 medals (1 gold, 3 silver, 2 bronze)</li>
                <li> <b>Great Britain:</b> 6 medals (2 gold, 2 silver, 2 bronze) </li>
                <li> <b>Uzbekistan:</b> 4 medals (2 gold, 1 silver, 1 bronze) </li>
                <li> <b>China:</b> 4 medals (1 gold, 2 silver, 1 bronze) </li>
            </ol>`],
            titulo5: [`
            <ol>
                <li> <b>Cuba:</b> 6 medals (4 gold, 2 silver) </li>
                <li> <b>United States:</b> 6 medals (1 gold, 3 silver, 2 bronze) </li>
                <li> <b>Uzbekistan:</b> 5 medals (1 gold, 3 silver, 1 bronze) </li>
                <li> <b>Great Britain:</b> 4 medals (1 gold, 2 silver, 1 bronze) </li>
                <li> <b>Philippines:</b> 2 medals (1 gold, 1 silver)</li>
            </ol>`],
            titulo6: [`
            There are no Summer Olympics in 2022, as the boxing competition is part of the Summer Olympics, held every four years. <br> These rankings reflect countries' performance in boxing during the 2008 to 2020 Summer Olympics. The list may vary slightly depending on the source and the timeliness of the results.`],
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
        titleHistory: ['BOXE OLYMPIQUE', 'CLASSEMENT', 'Jeux Olympiques de Pékin 2008', 'Jeux Olympiques de Londres 2012', 'Jeux Olympiques de Rio 2016', 'Jeux Olympiques de Tokyo 2020 (tenus en 2021)', "Jeux Olympiques de Tokyo 2020 Pékin 2022 ( Jeux d'hiver, la boxe ne fait pas partie des Jeux d'hiver)"],
        textHistory: {
            all: ['Texte sur l\'histoire de la boxe.'],
            federation: ['Texte sur la fédération de boxe.'],
            brazil: ['Texte sur le boxe au Brésil.'],
        },
        titleAbout: ["Objectif du sport et caractéristiques de l'espace et du matériel", 'Règles et modalités', 'Modalities and Specificities in Olympic Boxing', 'Curiosités'],
        textAbout: {
            titulo1: [`En boxe, l'objectif principal est de vaincre l'adversaire au moyen d'un combat réglé, en utilisant des techniques de frappe. Il existe deux manières principales de gagner : <br> <br>
                <b>KO (Knockout) :</b> Lorsqu'un combattant met son adversaire à terre et qu'il est incapable de se relever avant la fin du décompte de l'arbitre. <br> <br>
                <b>Décision des juges :</b> Si le combat se poursuit jusqu'à la fin des rounds établis, la victoire est décidée par les juges en fonction du décompte des coups, du contrôle du ring et de la stratégie. <br>`],
                titulo2: [`<b>Ring de boxe :</b> L'espace où se déroulent les combats est un ring carré, mesurant généralement entre 4,9 et 7,3 mètres de côté. Le ring est entouré de cordes pour garantir que les lutteurs restent dans la zone désignée.`],
                titulo3: [`<b>Matériaux :</b> <br>
                <b>Gants de boxe :</b> Utilisés pour protéger les mains des combattants et minimiser le risque de blessure des adversaires. Les gants sont rembourrés et la taille varie en fonction de la catégorie de poids et des règles spécifiques du combat. <br> <br>
                <b>Protège-dents :</b> Un dispositif de protection pour les dents et la mâchoire qui aide à prévenir les blessures aux dents et les fractures de la mâchoire. <br> <br>`],
                titulo4: [`<b>Protecteur du corps et du coquin :</b> Pour une protection supplémentaire des organes vitaux et des zones sensibles. Il est courant de porter un gilet de protection à l'entraînement, en particulier à l'entraînement. <br> <br>
                <b>Chaussures :</b> Les boxeurs portent des baskets légères et antidérapantes conçues pour offrir une bonne mobilité et une bonne adhérence sur le ring. <br> <br>
                <b>Sacs de frappe et équipement d'entraînement :</b> Pendant l'entraînement, les boxeurs utilisent des sacs de frappe, des sacs de vitesse et d'autres équipements pour améliorer leur technique et leur condition physique. <br>`],
                titulo5 : [`La boxe olympique, également connue sous le nom de boxe amateur, a des règles spécifiques qui garantissent la sécurité des compétiteurs et l'équité de la compétition. Voici les principales règles et modalités associées à la boxe olympique : <br><br>
                <b>Objectif :</b> L'objectif est de gagner le combat en portant des coups propres et efficaces ou, dans certains cas, par KO (coup de grâce). <br><br>
                <b>Compétition olympique :</b> Généralement 3 rounds de 3 minutes chacun, avec une pause d'une minute entre eux. <br> <br>`],
                titulo6 : [`<b>Score :</b> Basé sur des coups propres et efficaces. Le système de notation peut varier, mais traditionnellement, les juges notent en fonction de la clarté et de l'impact des coups. Dans les compétitions plus récentes, le décompte est effectué sur la base d'un système électronique ou numérique, où chaque coup valide est enregistré par un panel de juges. <br><br>
                <b>Fautes et pénalités :</b> Les coups de poing sous la taille, à l'arrière de la tête ou à l'arrière de la tête sont interdits. Les agressions antisportives, comme les coups de poing après l'ordre « stop », peuvent entraîner des pénalités ou une disqualification. <br><br>
                <b>Vainqueur :</b> Le boxeur ayant le plus de points à la fin des 3 rounds est déclaré vainqueur. <br> Un boxeur peut gagner par disqualification si l'adversaire commet des fautes graves ou répétées.`],
                titulo7: [`<b>Catégories de poids :</b> <br><br>
                <b>Hommes et femmes :</b> Il existe différentes catégories de poids, allant des poids légers aux poids lourds. Les catégories peuvent varier légèrement entre les compétitions internationales et régionales. <br><br>
                <b>Divisions :</b> Les catégories de poids sont définies de manière à ce que les concurrents soient de taille similaire, ce qui minimise l'avantage de poids.`],
                titulo8 : [`<b>Boxe féminine :</b> <br><br>
                <b>Similitude avec la boxe masculine :</b> Elle suit les mêmes règles générales que la boxe olympique masculine, avec des catégories de poids spécifiques pour les femmes.<br><br>
                <b>Inclusion olympique :</b> La boxe féminine a été incluse aux Jeux olympiques en 2012 et suit depuis les mêmes directives et règles que la boxe masculine.`],
                titulo9 : [`<b>Variations des règles :</b> <br><br>
                <b>AIBA :</b> La Fédération internationale de boxe (AIBA) réglemente la boxe olympique et ses règles peuvent être ajustées de temps à autre pour mettre à jour le système de notation ou améliorer la sécurité.`],
                titulo10 : [`<b>Histoire ancienne :</b> La boxe est l'un des sports les plus anciens, avec des preuves de sa pratique remontant à environ 3000 av. J.-C. en Mésopotamie. Elle était également populaire dans la Grèce antique, où elle faisait partie des anciens Jeux olympiques. <br><br>
                <b>Gants de boxe :</b> À l'origine, les boxeurs combattaient sans gants, utilisant uniquement des bandages sur leurs mains. Les gants ont été introduits à la fois pour protéger les combattants et pour éviter les blessures graves.`],
                titulo11: [`<b>Le plus grand KO de l'histoire :</b> le record du temps le plus long entre un coup et le décompte final d'un KO est détenu par Jack Dempsey, qui a mis KO Jess Willard au premier round d'un combat en 1919. Dempsey était célèbre pour sa puissance de frappe. <br><br>
                <b>La boxe au cinéma :</b> la boxe est depuis longtemps un thème populaire au cinéma, avec des films emblématiques tels que "Rocky" (1976), qui raconte l'histoire d'un boxeur amateur qui obtient une chance de remporter le titre mondial. Le succès du film a donné lieu à un certain nombre de suites et de spin-offs, notamment la série "Creed".`]
                
        },
        titleOlympics: ['BOXE OLYMPIQUE', 'CLASSEMENT', 'Jeux Olympiques de Pékin 2008', 'Jeux Olympiques de Londres 2012'],
        textOlympics: {
            titulo1 : [`La boxe olympique est un sport de combat qui fait partie des Jeux Olympiques depuis 1904 pour les hommes et 2012 pour les femmes. Les combats se déroulent sur trois rounds et les athlètes portent des gants, des casques et des protège-dents. La victoire peut se faire par KO, par décision des juges ou par arrêt médical. Les catégories sont divisées selon le poids et l'accent est mis sur la technique, la vitesse et la précision des coups. Le sport promeut le fair-play et impose des règles strictes pour la sécurité des combattants.`],
            titulo2 : [`
            <ol>
                <li> <b>Cuba :</b> 9 médailles (3 d'or, 4 d'argent, 2 de bronze)</li>
                <li> <b>États-Unis :</b> 8 médailles (2 d'or, 2 d'argent, 4 de bronze)</li>
                <li> <b>Grande-Bretagne :</b> 4 médailles (1 d'or, 3 de bronze)</li>
                <li> <b>Ukraine :</b> 4 médailles (1 d'or, 1 d'argent, 2 de bronze)</li>
                <li> <b>Turquie :</b> 3 médailles (1 d'or, 1 d'argent, 1 de bronze)</li>
            </ol>`],
            titulo3 : [`
            <ol>
                <li> <b>Cuba :</b> 7 médailles (3 d'or, 3 d'argent, 1 de bronze)</li>
                <li> <b>Grande-Bretagne :</b> 7 médailles (3 d'or, 1 d'argent, 3 de bronze)</li>
                <li> <b>États-Unis :</b> 6 médailles (2 d'or, 1 d'argent, 3 de bronze)</li>
                <li> <b>Ouzbékistan :</b> 5 médailles (2 d'or, 1 d'argent, 2 de bronze)</li>
                <li> <b>Azerbaïdjan :</b> 5 médailles (2 d'or, 1 d'argent, 2 de bronze)</li>
            </ol>`],
            titulo4 : [`
            <ol>
                <li> <b>Cuba :</b> 7 médailles (4 d'or, 2 d'argent, 1 de bronze)</li>
                <li> <b>États-Unis :</b> 6 médailles (1 d'or, 3 d'argent, 2 de bronze)</li>
                <li> <b>Grande-Bretagne :</b> 6 médailles (2 d'or, 2 d'argent, 2 de bronze) </li>
                <li> <b>Ouzbékistan :</b> 4 médailles (2 d'or, 1 d'argent, 1 de bronze) </li>
                <li> <b>Chine :</b> 4 médailles (1 d'or, 2 d'argent, 1 de bronze) </li>
            </ol>`],
            titulo5 : [`
            <ol>
                <li> <b>Cuba :</b> 6 médailles (4 d'or, 2 d'argent) </li>
                <li> <b>États-Unis :</b> 6 médailles (1 d'or, 3 d'argent, 2 de bronze) </li>
                <li> <b>Ouzbékistan :</b> 5 médailles (1 d'or, 3 d'argent, 1 de bronze) </li>
                <li> <b>Grande-Bretagne :</b> 4 médailles (1 d'or, 2 d'argent, 1 de bronze) </li>
                <li> <b>Philippines :</b> 2 médailles (1 d'or, 1 d'argent)</li>
            </ol>`],
            titulo6 : [`
            Il n'y aura pas de Jeux olympiques d'été en 2022, car la compétition de boxe fait partie des Jeux olympiques d'été, organisés tous les quatre ans. <br> Ces classements reflètent les performances des pays en boxe lors des Jeux olympiques d'été de 2008 à 2020. La liste peut varier légèrement en fonction de la source et du moment des résultats.`],
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

    const aboutTitles = document.querySelectorAll('.section-main .section-header .h1-about');
    const aboutTexts = document.querySelectorAll('.section-main .section-content .p-about');

    const aboutSections = ['titulo1', 'titulo2', 'titulo3', 'titulo4', 'titulo5', 'titulo6', 'titulo7', 'titulo8', 'titulo9', 'titulo10', 'titulo11'];
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
            console.log(sectionKey)
        }
    }

    const olympicsTitles = document.querySelectorAll('.section-main .section-header .h1-olympics');
    const olympicsTexts = document.querySelectorAll('.section-main .section-content .p-olympics');

    const olympicsSections = ['titulo1', 'titulo2', 'titulo3', 'titulo4', 'titulo5', 'titulo6'];
    console.log('Total olympicsTitle:', olympicsTitles.length);
    console.log(olympicsTitles)
    console.log('Total olympicsText:', olympicsTexts.length);
    console.log(olympicsTexts)

    for (let i = 0; i < olympicsSections.length; i++) {
        const sectionKey = olympicsSections[i];

        if (olympicsTitles[i]) {
            olympicsTitles[i].innerHTML = contentLanguages[language].titleOlympics[i] || ''; // Atualiza título da seção de História
        }

        if (olympicsTexts[i]) {
            olympicsTexts[i].innerHTML = contentLanguages[language].textOlympics[sectionKey][0] || ''; // Atualiza texto baseado na chave da seção
            console.log(sectionKey)
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