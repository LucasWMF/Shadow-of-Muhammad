// Dados de conteúdo para diferentes idiomas
const contentLanguages = {
    Português: {
        navbar: ['Home', 'Conteúdos <i style="margin-left:1rem;" class="fa-solid fa-chevron-down arrow"></i>', 'Feedback'],
        dropnavbar: ['História', 'Sobre', 'Olímpiadas'],
        title: ['Introdução Boxe Olímpico', 'História do Boxe e Federação', 'Modalidades e Regras'],
        textSummary: {
            'Introdução': ['O boxe olímpico é uma modalidade de combate que faz parte dos Jogos Olímpicos desde 1904 para homens e 2012 para mulheres. As lutas ocorrem em três rounds e os atletas utilizam luvas, capacete e protetor bucal. A vitória pode ser por nocaute, decisão dos juízes ou interrupção médica. As categorias são divididas por peso, e o foco é na técnica, rapidez e precisão dos golpes. O esporte promove fair play e possui regras rigorosas para a segurança dos lutadores.'],
            'História do Boxe e Federação': ['O boxe, originado na Grécia Antiga e incluído nos Jogos Olímpicos desde 688 a.C., ressurgiu na Inglaterra no século XVIII com as "Regras de Queensberry" (1867). Estreou nos Jogos Olímpicos modernos em 1904, com categorias femininas adicionadas em 2012. A Federação Internacional de Boxe Amador (FIBA), criada em 1920 e substituída pela AIBA em 1946, foi descredenciada pelo COI, mas o boxe ainda está presente nos Jogos. No Brasil, o boxe ganhou destaque no final do século XIX e com conquistas internacionais como a de Eder Jofre e Robson Conceição.'],
            'Modalidades e Regras': ['O boxe olímpico, ou amador, tem como objetivo vencer por pontos ou knockout (KO). A competição inclui 3 rounds de 3 minutos cada, com intervalos de 1 minuto. Os boxeadores usam luvas maiores (10-12 onças), capacete e protetor bucal. A pontuação é dada com base em golpes limpos e eficazes, com juízes ou sistemas eletrônicos. Faltas incluem golpes abaixo da cintura e comportamentos antidesportivos. O vencedor pode ser decidido por pontos ou desqualificação. As modalidades incluem pesos mosca, pena, leve, meio-médio, médio, pesado e superpesado, tanto para homens quanto para mulheres. O boxe feminino foi adicionado aos Jogos Olímpicos em 2012. A AIBA regula as regras, que podem variar em competições regionais e nacionais.'],
            'Curiosidades': ['Texto sobre curiosidades e benefícios em Português']
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
            titulo1: [`O boxe olímpico é um esporte de combate que faz parte dos Jogos Olímpicos desde 1904 para os homens e 2012 para as mulheres. As lutas acontecem em três rounds e os atletas usam luvas, capacetes e protetores bucais. A vitória pode ser por nocaute, decisão dos juízes ou interrupção médica. As categorias são divididas por peso, e o foco está na técnica, velocidade e precisão dos socos. O esporte promove o jogo limpo e tem regras rígidas para a segurança dos lutadores.`],
            titulo2: [`
            <ol>
                <li> <b>Cuba:</b> 9 medalhas (3 de ouro, 4 de prata, 2 de bronze)</li>
                <li> <b>Estados Unidos:</b> 8 medalhas (2 de ouro, 2 de prata, 4 de bronze)</li>
                <li> <b>Grã-Bretanha:</b> 4 medalhas (1 de ouro, 3 de bronze)</li>
                <li> <b>Ucrânia:</b> 4 medalhas (1 de ouro, 1 de prata, 2 de bronze)</li>
                <li> <b>Turquia:</b> 3 medalhas (1 de ouro, 1 de prata, 1 de bronze)</li>
            </ol>`],
            titulo3: [`
            <ol>
                <li> <b>Cuba:</b> 7 medalhas (3 de ouro, 3 de prata, 1 de bronze)</li>
                <li> <b>Grã-Bretanha:</b> 7 medalhas (3 de ouro, 1 de prata, 3 de bronze)</li>
                <li> <b>Estados Unidos:</b> 6 medalhas (2 de ouro, 1 de prata, 3 de bronze)</li>
                <li> <b>Uzbequistão:</b> 5 medalhas (2 de ouro, 1 de prata, 2 de bronze)</li>
                <li> <b>Azerbaijão:</b> 5 medalhas (2 de ouro, 1 de prata, 2 de bronze)</li>
            </ol>`],
            titulo4: [`
            <ol>
                <li> <b>Cuba:</b> 7 medalhas (4 de ouro, 2 de prata, 1 de bronze)</li>
                <li> <b>Estados Unidos:</b> 6 medalhas (1 de ouro, 3 de prata, 2 de bronze)</li>
                <li> <b>Grã-Bretanha:</b> 6 medalhas (2 de ouro, 2 de prata, 2 de bronze) </li>
                <li> <b>Uzbequistão:</b> 4 medalhas (2 de ouro, 1 de prata, 1 de bronze) </li>
                <li> <b>China:</b> 4 medalhas (1 de ouro, 2 de prata, 1 de bronze) </li>
            </ol>`],
            titulo5: [`
            <ol>
                <li> <b>Cuba:</b> 6 medalhas (4 de ouro, 2 de prata) </li>
                <li> <b>Estados Unidos:</b> 6 medalhas (1 de ouro, 3 de prata, 2 de bronze) </li>
                <li> <b>Uzbequistão:</b> 5 medalhas (1 de ouro, 3 de prata, 1 de bronze) </li>
                <li> <b>Grã-Bretanha:</b> 4 medalhas (1 de ouro, 2 de prata, 1 de bronze) </li>
                <li> <b>Filipinas:</b> 2 medalhas (1 de ouro, 1 de prata)</li>
            </ol>`],
            titulo6: [`
            Não há Olimpíadas de Verão em 2022, pois a competição de boxe faz parte das Olimpíadas de Verão, realizadas a cada quatro anos. <br> Essas classificações refletem o desempenho dos países no boxe durante as Olimpíadas de Verão de 2008 a 2020. A lista pode variar um pouco dependendo da fonte e da atualidade dos resultados.`],
        },
        footerTitles: ['SOBRE O SITE', 'REDES SOCIAIS', 'ABAS'],
        footerTexts: ['Nossa escola online ensina as regras e modalidades do boxe olímpico, oferecendo conhecimento e treino para iniciantes e entusiastas.'],
        footerLinks: ['HOME', 'HISTÓRIA', 'SOBRE', 'OLÍMPIADAS', 'FEEDBACK'],
        footerCopy: ['Copyright (c) 2024 Shadow Of Muhammad Todos os direitos reservados Este produto é protegido por direitos autorais e distribuído sob licenças que restringem cópia, distribuição e descompilação.'],
    },
    English: {
        navbar: ['Home', 'Contents <i style="margin-left:1rem;" class="fa-solid fa-chevron-down arrow"></i>', 'Feedback'],
        dropnavbar: ['History', 'About', 'Olympics'],
        title: ['Introduction to Olympic Boxing', 'History of Boxing and Federation', 'Modalities and Rules'],
        textSummary: {
            'Introduction': [`Olympic boxing is a combat sport that has been part of the Olympic Games since 1904 for men and 2012 for women. The fights occur in three rounds, and athletes wear gloves, helmets, and mouthguards. Victory can be by knockout, judges' decision, or medical stoppage. The categories are divided by weight, focusing on technique, speed, and precision of blows. The sport promotes fair play and has strict rules for the safety of the fighters.`],
            'History of Boxing and Federation': ['Boxing, originated in Ancient Greece and included in the Olympic Games since 688 BC, resurfaced in England in the 18th century with the "Queensberry Rules" (1867). It debuted in the modern Olympic Games in 1904, with female categories added in 2012. The International Boxing Federation (FIBA), created in 1920 and replaced by the AIBA in 1946, was discredited by the IOC, but boxing remains present in the Games. In Brazil, boxing gained prominence at the end of the 19th century with international achievements from fighters like Eder Jofre and Robson Conceição.'],
            'Modalities and Rules': ['Olympic boxing, or amateur boxing, aims to win by points or knockout (KO). The competition includes 3 rounds of 3 minutes each, with 1-minute breaks. Boxers use larger gloves (10-12 ounces), helmets, and mouthguards. Scoring is based on clean and effective punches, judged by referees or electronic systems. Fouls include punches below the belt and unsportsmanlike behavior. The winner may be decided by points or disqualification. The modalities include fly, feather, lightweight, welterweight, middleweight, heavyweight, and super heavyweight, for both men and women. Women\'s boxing was added to the Olympic Games in 2012. The AIBA regulates the rules, which may vary in regional and national competitions.'],
            'Curiosities': ['Text about curiosities and benefits in English']
        },
        buttonMore: 'See More',
        pageList: ['Home', 'History', 'About', 'Olympics', 'Feedback'],
        // History Page
        titleHistory: ['History of Boxing', 'Boxing Federation', 'Boxing in Brazil'],
        textHistory: {
            all: [`Boxing is one of the oldest combat sports, originating in Ancient Greece, where it was included in the Olympic Games in 688 BC. At that time, boxing was practiced as part of military training and competed by athletes nude. The first registered Olympic champion was Onosmastos of Smyrna. The sport went through a period of decline after the fall of the Roman Empire but resurfaced in 18th-century England with the establishment of the "Queensberry Rules" in 1867, which standardized the sport, including the use of gloves and timed rounds. 
                
            In the modern era, Olympic boxing debuted at the St. Louis Olympic Games in 1904, with seven weight categories. The sport is exclusively practiced by amateur pugilists and has specific rules to ensure the athletes' safety, such as the use of helmets (for women) and other protective gear. In 1920, the International Amateur Boxing Federation (FIBA) was created and succeeded, in 1946, by the International Boxing Association (AIBA), which regulated the sport for decades until facing recent controversies and losing recognition from the International Olympic Committee (IOC).`,
                `Women’s boxing was only introduced in the London 2012 Olympics. In 2024, the sport will be contested in 13 categories (7 male and 6 female), with 248 athletes competing. Major powers in the sport include the United States and Cuba, which have a notable history of Olympic success, with multiple champions like Teófilo Stevenson and Félix Savón. 
            
            In Brazil, boxing gained prominence at the end of the 19th century and consolidated with athletes like Eder Jofre and Acelino "Popó" Freitas. In 2016, Robson Conceição made history by winning the country's first Olympic gold medal in the sport, solidifying boxing as an important discipline in the Brazilian sports scene.`],
            federation: [`The International Amateur Boxing Federation (FIBA), founded in 1920, aimed primarily to regulate boxing globally, promoting uniformity in the rules and competition conditions. In 1946, FIBA was succeeded by the International Boxing Association (AIBA), which continued this work and also took charge of organizing international competitions, including the Olympic Games.

            Over the years, the AIBA faced challenges and controversies, primarily related to sport management and transparency. These issues culminated in the AIBA's disqualification by the International Olympic Committee (IOC) in 2019, although boxing remains part of the Olympic Games. The organization has been striving to recover its reputation and reintegrate into the Olympic system.
                
            Recently, the AIBA has been viewed with suspicion due to allegations of corruption and mismanagement. Despite this, boxing continues to be a popular modality, both at the amateur and professional levels, and the AIBA still organizes significant championships and events worldwide.`],
            brazil: ['Boxing in Brazil began to gain popularity in the late 19th century, especially in cities like São Paulo and Rio de Janeiro. Eder Jofre, world champion in the bantamweight division in the 1950s, was a crucial figure for the recognition of Brazilian boxing on the international scene. He is known for his technique and knockout power, accumulating an impressive record in his career. In the 1990s and 2000s, Acelino "Popó" Freitas brought new attention to national boxing, winning world titles in categories like super-featherweight and lightweight. One of the most important achievements was in 2016 when Robson Conceição became the first Brazilian to win an Olympic gold medal in boxing during the Rio de Janeiro Games. The sport continues to grow in Brazil, with a new generation of boxers competing at the international level, despite challenges in terms of institutional and financial support.']
        },
        titleAbout: ['Objective of the sport and characteristics of the space and material', 'Rules and modalities', 'Modalities and Specificities in Olympic Boxing', 'Curiosities'],
        textAbout: {
            titulo1: [`In boxing, the main objective is to defeat the opponent through a regulated fight, using punching techniques. There are two main ways to win: <br> <br>
            <b> Knockout (KO): </b> When a fighter knocks down the opponent and he cannot get up before the referee's count ends. <br> <br>
            <b> Judges' Decision: </b> If the fight goes until the end of the established rounds, the victory is decided by the judges based on scoring punches, ring control, and strategy.`],
            titulo2: [`<b>Boxing Ring:</b> The space where the fights take place is a square ring, usually measuring between 4.9 to 7.3 meters on each side. The ring is surrounded by ropes to ensure that the fighters remain within the designated area. `],
            titulo3: [`<b>Materials:</b> <br>
            <b>Boxing Gloves:</b> Used to protect the fighters' hands and minimize the risk of injury to opponents. The gloves are padded, and the size varies according to the weight category and specific rules of the fight. <br> <br>
            <b>Mouthguard:</b> A protective device for the teeth and jaw, which helps prevent dental injuries and fractures in the jaw. <br> <br>`],
            titulo4: [`<b>Body Protector and Groin Protector:</b> For additional protection of vital organs and sensitive areas. It is common to wear a protective vest during practice, especially in training. <br> <br>
            <b>Shoes:</b> Boxers wear light and non-slip shoes designed to provide good mobility and grip on the ring. <br> <br>
            <b>Punching Bags and Training Equipment:</b> During training, boxers use punching bags, speed bags, and other equipment to enhance technique and physical conditioning. <br>`],
            titulo5: [`Olympic boxing, also known as amateur boxing, has specific rules that ensure the safety of competitors and fairness in competition. Here are the main rules and modalities associated with Olympic boxing: <br><br>
            <b>Objective:</b> The goal is to win the fight by scoring clean and effective punches or, in some cases, by knockout (KO). <br><br>
            <b>Olympic Competition:</b> Generally 3 rounds of 3 minutes each, with 1 minute of rest between them. <br> <br>`],
            titulo6: [`<b>Scoring:</b> Based on clean and effective punches. The scoring system may vary, but traditionally, judges score based on the clarity and impact of the punches. In more recent competitions, scoring is done using an electronic or digital system, where each valid punch is recorded by a panel of judges. <br><br>
            <b>Fouls and Penalties:</b> Punches below the belt, to the back of the head, or to the neck are prohibited. Unsportsmanlike conduct, such as punches after the “stop” command, may result in penalties or disqualification.`],
            titulo7: [`<b>Weight Classes:</b> Olympic boxing has different weight classes to ensure fair competition. The categories are: flyweight, bantamweight, featherweight, lightweight, welterweight, middleweight, light heavyweight, heavyweight, and super heavyweight, for both men and women.<br><br>
            <b>Women's Boxing:</b> Women's boxing was included in the Olympics in 2012, with separate weight categories and specific rules to ensure gender equality in the sport. <br><br>
            <b>Protection Gear:</b> Boxers wear protective gear such as gloves (10-12 ounces), headgear (for women), and mouthguards to minimize the risk of injury during fights.`],
            titulo8: [`Boxing offers numerous curiosities and benefits, both physically and mentally. <br><br>
            <b>Curiosities:</b><br>
            - The sport has existed for thousands of years, with evidence from ancient Egypt. <br>
            - Muhammad Ali is considered one of the greatest boxers of all time, known for his technique and charisma. <br>
            - Boxing is not only a sport but also a form of self-defense and discipline. <br><br>
            <b>Benefits:</b><br>
            - Improves physical conditioning, strength, and coordination. <br>
            - Develops discipline and concentration. <br>
            - Provides stress relief and emotional control. <br>
            - Increases self-esteem and confidence.`],
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
            There are no Summer Olympics in 2022, as the boxing competition is part of the Summer Olympics, held every four years. <br> These rankings reflect countries' performance in boxing during the 2008 to 2020 Summer Olympics. The list may vary slightly depending on the source and the timeliness of the results.`]
        },
        footerTitles: ['ABOUT THE SITE', 'SOCIAL NETWORKS', 'TABS'],
        footerTexts: ['Our online school teaches the rules and modalities of Olympic boxing, offering knowledge and training for beginners and enthusiasts.'],
        footerLinks: ['HOME', 'HISTORY', 'ABOUT', 'OLYMPICS', 'FEEDBACK'],
        footerCopy: ['Copyright (c) 2024 Shadow Of Muhammad. All rights reserved. This product is protected by copyright and distributed under licenses that restrict copying, distribution, and decompilation.'],
    },
    Français: {
        navbar: ['Accueil', 'Contenus <i style="margin-left:1rem;" class="fa-solid fa-chevron-down arrow"></i>', 'Retour d\'information'],
        dropnavbar: ['Histoire', 'À propos', 'Olympiques'],
        title: ['Introduction à la boxe olympique', 'Histoire de la boxe et de la fédération', 'Modalités et règles'],
        textSummary: {
            'Introduction': ['La boxe olympique est un sport de combat qui fait partie des Jeux Olympiques depuis 1904 pour les hommes et 2012 pour les femmes. Les combats se déroulent en trois rounds, et les athlètes portent des gants, des casques et des protège-dents. La victoire peut se faire par knockout, décision des juges, ou arrêt médical. Les catégories sont divisées par poids, mettant l’accent sur la technique, la vitesse et la précision des coups. Le sport promeut le fair-play et a des règles strictes pour la sécurité des combattants.'],
            'Histoire de la boxe et de la fédération': [`La boxe, originaire de la Grèce antique et incluse dans les Jeux Olympiques depuis 688 av. J.-C., a refait surface en Angleterre au XVIIIe siècle avec les "Queensberry Rules" (1867). Elle a fait ses débuts dans les Jeux Olympiques modernes en 1904, avec des catégories féminines ajoutées en 2012. La Fédération Internationale de Boxe Amateur (FIBA), créée en 1920 et remplacée par l’AIBA en 1946, a été discréditée par le CIO, mais la boxe reste présente dans les Jeux. Au Brésil, la boxe a pris de l'ampleur à la fin du XIXe siècle avec les réalisations internationales de boxeurs comme Eder Jofre et Robson Conceição.`],
            'Modalités et règles': [`La boxe olympique, ou boxe amateur, vise à gagner par points ou knockout (KO). La compétition comprend 3 rounds de 3 minutes chacun, avec des pauses d’une minute. Les boxeurs utilisent des gants plus grands (10-12 onces), des casques et des protège-dents. Le scoring est basé sur des coups propres et efficaces, jugés par des arbitres ou des systèmes électroniques. Les fautes comprennent des coups sous la ceinture et un comportement antisportif. Le gagnant peut être décidé par points ou disqualification. Les modalités comprennent les poids mouches, plumes, légers, welters, moyens, lourds et super lourds, pour les hommes et les femmes. La boxe féminine a été ajoutée aux Jeux Olympiques en 2012. L’AIBA régule les règles, qui peuvent varier dans les compétitions régionales et nationales.'],
            'Curiosités': ['Texte sur les curiosités et les bénéfices en français`]
        },
        buttonMore: 'Voir plus',
        pageList: ['Accueil', 'Histoire', 'À propos', 'Olympiques', 'Retour d\'information'],
        // Page Histoire
        titleHistory: ['Histoire de la boxe', 'Fédération de boxe', 'Boxe au Brésil'],
        textHistory: {
            all: [`La boxe est l'un des plus anciens sports de combat, originaire de la Grèce antique, où elle a été incluse dans les Jeux Olympiques en 688 av. J.-C. À cette époque, la boxe était pratiquée comme partie de l’entraînement militaire et se disputait par des athlètes nus. Le premier champion olympique enregistré était Onosmastos de Smyrne. Le sport a connu une période de déclin après la chute de l'Empire romain, mais a refait surface en Angleterre au XVIIIe siècle avec l'établissement des "Queensberry Rules" en 1867, qui ont standardisé le sport, y compris l'utilisation de gants et des rounds chronométrés. 
                
            À l'ère moderne, la boxe olympique a fait ses débuts aux Jeux Olympiques de Saint-Louis en 1904, avec sept catégories de poids. Le sport est exclusivement pratiqué par des pugilistes amateurs et a des règles spécifiques pour assurer la sécurité des athlètes, telles que l'utilisation de casques (pour les femmes) et d'autres équipements de protection. En 1920, la Fédération Internationale de Boxe Amateur (FIBA) a été créée et a été remplacée, en 1946, par l'Association Internationale de Boxe (AIBA), qui a régulé le sport pendant des décennies jusqu'à faire face à des controverses récentes et perdre la reconnaissance du Comité International Olympique (CIO).`,
                `La boxe féminine n'a été introduite qu'aux Jeux Olympiques de Londres en 2012. En 2024, le sport sera disputé dans 13 catégories (7 masculines et 6 féminines), avec 248 athlètes en compétition. Les grandes puissances du sport incluent les États-Unis et Cuba, qui ont une histoire notable de succès olympiques, avec plusieurs champions comme Teófilo Stevenson et Félix Savón. 
            
            Au Brésil, la boxe a gagné en popularité à la fin du XIXe siècle et s'est consolidée avec des athlètes comme Eder Jofre et Acelino "Popó" Freitas. En 2016, Robson Conceição a fait l'histoire en remportant la première médaille d'or olympique du pays dans ce sport, solidifiant la boxe comme une discipline importante dans la scène sportive brésilienne.`],
            federation: [`La Fédération Internationale de Boxe Amateur (FIBA), fondée en 1920, visait principalement à réglementer la boxe à l'échelle mondiale, en promouvant l'uniformité des règles et des conditions de compétition. En 1946, la FIBA a été remplacée par l'Association Internationale de Boxe (AIBA), qui a poursuivi ce travail et a également pris en charge l'organisation de compétitions internationales, y compris les Jeux Olympiques.

            Au fil des ans, l'AIBA a été confrontée à des défis et des controverses, principalement liés à la gestion du sport et à la transparence. Ces problèmes ont culminé dans la disqualification de l'AIBA par le Comité International Olympique (CIO) en 2019, bien que la boxe reste une partie des Jeux Olympiques. L'organisation s'efforce de récupérer sa réputation et de se réintégrer dans le système olympique.
                
            Récemment, l'AIBA a été vue avec suspicion en raison d'allégations de corruption et de mauvaise gestion. Malgré cela, la boxe continue d'être une modalité populaire, tant au niveau amateur que professionnel, et l'AIBA continue d'organiser des championnats et des événements significatifs dans le monde entier.`],
            brazil: [`La boxe au Brésil a commencé à gagner en popularité à la fin du XIXe siècle, notamment dans des villes comme São Paulo et Rio de Janeiro. Eder Jofre, champion du monde dans la division des poids coqs dans les années 1950, a été une figure cruciale pour la reconnaissance de la boxe brésilienne sur la scène internationale. Il est connu pour sa technique et sa puissance de knockout, accumulant un impressionnant palmarès au cours de sa carrière. Dans les années 1990 et 2000, Acelino "Popó" Freitas a attiré une nouvelle attention sur la boxe nationale, remportant des titres mondiaux dans des catégories comme super-plume et léger. L'un des accomplissements les plus importants a eu lieu en 2016 lorsque Robson Conceição est devenu le premier Brésilien à remporter une médaille d'or olympique en boxe lors des Jeux de Rio de Janeiro. Le sport continue de croître au Brésil, avec une nouvelle génération de boxeurs en compétition à l'international, malgré les défis en termes de soutien institutionnel et financier.`]
        },
        titleAbout: ['Objectif du sport et caractéristiques de l’espace et du matériel', 'Règles et modalités', 'Modalités et spécificités en boxe olympique', 'Curiosités'],
        textAbout: {
            title1: [`En boxe, l’objectif principal est de vaincre l’adversaire par un combat réglementé, en utilisant des techniques de frappe. Il existe deux manières principales de gagner : <br> <br>
            <b> Knockout (KO) : </b> Lorsqu’un combattant met l’adversaire au sol et qu’il ne peut pas se relever avant la fin du compte du juge. <br> <br>
            <b> Décision des juges : </b> Si le combat se termine jusqu'à la fin des rounds établis, la victoire est décidée par les juges sur la base des coups marqués, du contrôle du ring et de la stratégie.`],
            title2: [`<b>Ring de boxe :</b> L'espace où se déroulent les combats est un ring carré, mesurant généralement entre 4,9 et 7,3 mètres de chaque côté. Le ring est entouré de cordes pour s'assurer que les combattants restent dans la zone désignée.`],
            title3: [`<b>Matériaux :</b> <br>
            <b>Gants de boxe :</b> Utilisés pour protéger les mains des combattants et minimiser le risque de blessure pour les adversaires. Les gants sont rembourrés, et la taille varie de 10 à 12 onces selon la catégorie de poids. <br> <br>
            <b>Casque :</b> Obligatoire pour les boxeurs féminins et conseillé pour les boxeurs masculins, le casque protège la tête des impacts. <br> <br>
            <b>Protège-dents :</b> Équipement essentiel pour éviter les blessures dentaires et buccales. <br> <br>
            <b>Vêtements :</b> Les boxeurs portent généralement des shorts, des chaussures de boxe et un maillot, garantissant la liberté de mouvement pendant le combat.`],
            title4: [`La boxe olympique se compose de plusieurs modalités, qui se distinguent par les caractéristiques des compétitions et des règles. Les modalités sont les suivantes : <br>
            <b>Boxe masculine :</b> Inclus tous les catégories de poids, il se concentre sur des techniques variées et le développement de la force. <br>
            <b>Boxe féminine :</b> Comme la boxe masculine, mais avec des règles et un équipement spécifiques, comme le casque. <br>
            <b>Boxe des jeunes :</b> Destinée aux boxeurs âgés de 17 à 18 ans, cette modalité favorise le développement des jeunes talents dans le sport. <br>
            <b>Boxe des vétérans :</b> Compétitions réservées aux boxeurs de plus de 35 ans, cette modalité valorise l'expérience et la technique. <br>
            <b>Boxe scolaire :</b> Encouragée dans les écoles pour promouvoir la discipline et la santé des jeunes.`],
            title5: [`La boxe olympique, également connue sous le nom de boxe amateur, a des règles spécifiques qui garantissent la sécurité des compétiteurs et l'équité de la compétition. Voici les principales règles et modalités associées à la boxe olympique : <br><br>
                <b>Objectif :</b> L'objectif est de gagner le combat en portant des coups propres et efficaces ou, dans certains cas, par KO (coup de grâce). <br><br>
                <b>Compétition olympique :</b> Généralement 3 rounds de 3 minutes chacun, avec une pause d'une minute entre eux. <br> <br>`],
            titulo6: [`<b>Score :</b> Basé sur des coups propres et efficaces. Le système de notation peut varier, mais traditionnellement, les juges notent en fonction de la clarté et de l'impact des coups. Dans les compétitions plus récentes, le décompte est effectué sur la base d'un système électronique ou numérique, où chaque coup valide est enregistré par un panel de juges. <br><br>
                <b>Fautes et pénalités :</b> Les coups de poing sous la taille, à l'arrière de la tête ou à l'arrière de la tête sont interdits. Les agressions antisportives, comme les coups de poing après l'ordre « stop », peuvent entraîner des pénalités ou une disqualification. <br><br>
                <b>Vainqueur :</b> Le boxeur ayant le plus de points à la fin des 3 rounds est déclaré vainqueur. <br> Un boxeur peut gagner par disqualification si l'adversaire commet des fautes graves ou répétées.`],
            titulo7: [`<b>Catégories de poids :</b> <br><br>
                <b>Hommes et femmes :</b> Il existe différentes catégories de poids, allant des poids légers aux poids lourds. Les catégories peuvent varier légèrement entre les compétitions internationales et régionales. <br><br>
                <b>Divisions :</b> Les catégories de poids sont définies de manière à ce que les concurrents soient de taille similaire, ce qui minimise l'avantage de poids.`],
            titulo8: [`<b>Boxe féminine :</b> <br><br>
                <b>Similitude avec la boxe masculine :</b> Elle suit les mêmes règles générales que la boxe olympique masculine, avec des catégories de poids spécifiques pour les femmes.<br><br>
                <b>Inclusion olympique :</b> La boxe féminine a été incluse aux Jeux olympiques en 2012 et suit depuis les mêmes directives et règles que la boxe masculine.`],
            titulo9: [`<b>Variations des règles :</b> <br><br>
                <b>AIBA :</b> La Fédération internationale de boxe (AIBA) réglemente la boxe olympique et ses règles peuvent être ajustées de temps à autre pour mettre à jour le système de notation ou améliorer la sécurité.`],
            titulo10: [`<b>Histoire ancienne :</b> La boxe est l'un des sports les plus anciens, avec des preuves de sa pratique remontant à environ 3000 av. J.-C. en Mésopotamie. Elle était également populaire dans la Grèce antique, où elle faisait partie des anciens Jeux olympiques. <br><br>
                <b>Gants de boxe :</b> À l'origine, les boxeurs combattaient sans gants, utilisant uniquement des bandages sur leurs mains. Les gants ont été introduits à la fois pour protéger les combattants et pour éviter les blessures graves.`],
            titulo11: [`<b>Le plus grand KO de l'histoire :</b> le record du temps le plus long entre un coup et le décompte final d'un KO est détenu par Jack Dempsey, qui a mis KO Jess Willard au premier round d'un combat en 1919. Dempsey était célèbre pour sa puissance de frappe. <br><br>
                <b>La boxe au cinéma :</b> la boxe est depuis longtemps un thème populaire au cinéma, avec des films emblématiques tels que "Rocky" (1976), qui raconte l'histoire d'un boxeur amateur qui obtient une chance de remporter le titre mondial. Le succès du film a donné lieu à un certain nombre de suites et de spin-offs, notamment la série "Creed".`]

        },
        titleOlympics: ['BOXE OLYMPIQUE', 'CLASSEMENT', 'Jeux Olympiques de Pékin 2008', 'Jeux Olympiques de Londres 2012', 'Jeux olympiques de Rio 2016', 'Jeux olympiques de Tokyo 2020 (organisés en 2021)', "Jeux olympiques de Pékin 2022 (Jeux d'hiver, la boxe ne fait pas partie des Jeux d'hiver)"],
        textOlympics: {
            titulo1: [`La boxe olympique est un sport de combat qui fait partie des Jeux Olympiques depuis 1904 pour les hommes et 2012 pour les femmes. Les combats se déroulent sur trois rounds et les athlètes portent des gants, des casques et des protège-dents. La victoire peut se faire par KO, par décision des juges ou par arrêt médical. Les catégories sont divisées selon le poids et l'accent est mis sur la technique, la vitesse et la précision des coups. Le sport promeut le fair-play et impose des règles strictes pour la sécurité des combattants.`],
            titulo2: [`
            <ol>
                <li> <b>Cuba :</b> 9 médailles (3 d'or, 4 d'argent, 2 de bronze)</li>
                <li> <b>États-Unis :</b> 8 médailles (2 d'or, 2 d'argent, 4 de bronze)</li>
                <li> <b>Grande-Bretagne :</b> 4 médailles (1 d'or, 3 de bronze)</li>
                <li> <b>Ukraine :</b> 4 médailles (1 d'or, 1 d'argent, 2 de bronze)</li>
                <li> <b>Turquie :</b> 3 médailles (1 d'or, 1 d'argent, 1 de bronze)</li>
            </ol>`],
            titulo3: [`
            <ol>
                <li> <b>Cuba :</b> 7 médailles (3 d'or, 3 d'argent, 1 de bronze)</li>
                <li> <b>Grande-Bretagne :</b> 7 médailles (3 d'or, 1 d'argent, 3 de bronze)</li>
                <li> <b>États-Unis :</b> 6 médailles (2 d'or, 1 d'argent, 3 de bronze)</li>
                <li> <b>Ouzbékistan :</b> 5 médailles (2 d'or, 1 d'argent, 2 de bronze)</li>
                <li> <b>Azerbaïdjan :</b> 5 médailles (2 d'or, 1 d'argent, 2 de bronze)</li>
            </ol>`],
            titulo4: [`
            <ol>
                <li> <b>Cuba :</b> 7 médailles (4 d'or, 2 d'argent, 1 de bronze)</li>
                <li> <b>États-Unis :</b> 6 médailles (1 d'or, 3 d'argent, 2 de bronze)</li>
                <li> <b>Grande-Bretagne :</b> 6 médailles (2 d'or, 2 d'argent, 2 de bronze) </li>
                <li> <b>Ouzbékistan :</b> 4 médailles (2 d'or, 1 d'argent, 1 de bronze) </li>
                <li> <b>Chine :</b> 4 médailles (1 d'or, 2 d'argent, 1 de bronze) </li>
            </ol>`],
            titulo5: [`
            <ol>
                <li> <b>Cuba :</b> 6 médailles (4 d'or, 2 d'argent) </li>
                <li> <b>États-Unis :</b> 6 médailles (1 d'or, 3 d'argent, 2 de bronze) </li>
                <li> <b>Ouzbékistan :</b> 5 médailles (1 d'or, 3 d'argent, 1 de bronze) </li>
                <li> <b>Grande-Bretagne :</b> 4 médailles (1 d'or, 2 d'argent, 1 de bronze) </li>
                <li> <b>Philippines :</b> 2 médailles (1 d'or, 1 d'argent)</li>
            </ol>`],
            titulo6: [`
            Il n'y aura pas de Jeux olympiques d'été en 2022, car la compétition de boxe fait partie des Jeux olympiques d'été, organisés tous les quatre ans. <br> Ces classements reflètent les performances des pays en boxe lors des Jeux olympiques d'été de 2008 à 2020. La liste peut varier légèrement en fonction de la source et du moment des résultats.`],
            titulo6: [`
            Il n'y aura pas de Jeux olympiques d'été en 2022, car la compétition de boxe fait partie des Jeux olympiques d'été, organisés tous les quatre ans. <br> Ces classements reflètent les performances des pays en boxe lors des Jeux olympiques d'été de 2008 à 2020. La liste peut varier légèrement en fonction de la source et du moment des résultats.`],
        },
        footerTitles: ['À PROPOS DU SITE', 'RÉSEAUX SOCIAUX', 'ONGLETS'],
        footerTexts: ['Notre école en ligne enseigne les règles et modalités de la boxe olympique, offrant des connaissances et des entraînements pour les débutants et les passionnés.'],
        footerLinks: ['ACCUEIL', 'HISTOIRE', 'À PROPOS', 'OLYMPIADES', 'RETROUVER'],
        footerCopy: ['Droits d\'auteur (c) 2024 Shadow Of Muhammad. Tous les droits sont réservés. Ce produit est protégé par des droits d\'auteur et distribué sous des licences qui restreignent la copie, la distribution et la décompilation.'],
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

    // console.log('Total aboutTitle:', historyTitles.length);
    // console.log(historyTitles)
    // console.log('Total aboutText:', historyTexts.length);
    // console.log(historyTexts)

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

    const aboutSections = ['titulo1', 'titulo2', 'titulo3', 'titulo4', 'titulo5', 'titulo6', 'titulo7', 'titulo8', 'titulo9', 'titulo10', 'titulo11'];
    console.log('Total aboutTitle:', aboutTitles.length);
    console.log(aboutTitles);
    console.log('Total aboutText:', aboutTexts.length);
    console.log(aboutTexts);

    // Loop para atualizar títulos e textos das seções de História
    for (let i = 0; i < aboutSections.length; i++) {
        const sectionKey = aboutSections[i];

        if (aboutTitles[i]) {
            aboutTitles[i].innerHTML = contentLanguages[language].titleAbout[i] || ''; // Atualiza título da seção de História
        } else {
            console.error(`Título não encontrado para o índice: ${i}`);
        }

        if (aboutTexts[i]) {
            // Verifique se sectionKey existe e se o texto está definido
            if (contentLanguages[language].textAbout[sectionKey]) {
                aboutTexts[i].innerHTML = contentLanguages[language].textAbout[sectionKey][i] || ''; // Atualiza texto baseado na chave da seção
            } else {
                console.error(`Chave de seção não encontrada: ${sectionKey}`);
            }
        } else {
            console.error(`Texto não encontrado para o índice: ${i}`);
        }
    }
        // Atualiza os textos do rodapé
    const footerTitles = document.querySelectorAll('h1.title-footer');
    const footerTexts = document.querySelectorAll('.footer-text');
    const footerLinks = document.querySelectorAll('.list-pages a');
    const footerCopy = document.querySelectorAll('.text-copy p');

    // console.log(footerTitles);
    // console.log(footerTexts);
    // console.log(footerLinks);
    // console.log(footerCopy);

    const footerTitlesKeys = ['sobre', 'redes_sociais', 'abas'];

    // Atualizando títulos do rodapé
    for (let i = 0; i < footerTitles.length; i++) {
        if (footerTitles[i] && contentLanguages[language].footerTitles[0]) {
            footerTitles[i].innerText = contentLanguages[language].footerTitles[i];
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

    const olympicsTitles = document.querySelectorAll('.h1-olympics');
    const olympicsTexts = document.querySelectorAll('.section-main .section-content .p-olympics');

    const olympicsSections = ['titulo1', 'titulo2', 'titulo3', 'titulo4', 'titulo5', 'titulo6'];
    // console.log('Total olympicsTitle:', olympicsTitles.length);
    // console.log(olympicsTitles);
    // console.log('Total olympicsText:', olympicsTexts.length);
    // console.log(olympicsTexts);

    for (let i = 0; i < olympicsSections.length; i++) {
        const sectionKey = olympicsSections[i];

        if (olympicsTitles[i]) {
            olympicsTitles[i].innerHTML = contentLanguages[language].titleOlympics[i] || '';
        }

        if (olympicsTexts[i]) {
            olympicsTexts[i].innerHTML = contentLanguages[language].textOlympics[sectionKey][0] || '';
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
