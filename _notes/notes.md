# Minhas anotações

## Pista Lenta - Protocolos e rodando o site de forma local

Existem diversos protocolos e com diferentes objetivos, alguns exemplos:

- HTTP - HyperText Transfer Protocol
- FTP - File Transfer Protocol
- SMTP - Simple Mail Transfer Protocol
- UDP - User Datagram Protocol

Os protocolos definem um acordo conhecido entre duas partes e como devem se comunicar. Na comunicação entre os protocolos pode ocorrer erros e perda de pacotes, mas existem meios de tentar recuperar esses pacotes perdidos.

Existem casos que você quer saber se a informação chegou no ponto final e outros momentos que não é preciso saber disso, por exemplo, na chamada de vídeo onde você pode perder um pedaço da informação mas não tem problema. UDP é um tipo de protocolo que não precisa de uma confirmação de recebimento, é um pacote autocontido, o que é diferente do TCP.

Vídeo da diferença entre o protocolo UDP e TCP [HTML5 Games - UDP vs TCP](https://youtu.be/ZEEBsq3eQmg).

## Pista Lenta - Página inicial

O NextJs faz um roteamento baseado em arquivos, conhecido como File-Based Routing, foi inspirado como o PHP faz as rotas.
Ao adicionar um arquivo chamado index.js/index.ts na pasta pages, ele automaticamente vira uma rota, por exemplo:

- pages/index.js ---> / (diretório real)
- pages/produtos/index.js ---> /produtos (pasta)
- recuperar-senha.js ---> /recuperar-senha (arquivo)

Responsabilidade do Next e do React. React vai entregar os objetos concretos, como os componentes visuais, o Next vai fazer o roteamento desses arquivos

## 🚗 Pista Rápida: Dia 05

O Git funciona com versionamento distribuído. Ponto importante, o Git não salva somente as diferenças entre os arquivos que nem o CVS, por isso ele é mais rápido, porque não há necessidade de processar arquivos antigos para chegar no atual, mas acaba ocupando mais espaço.

Resumindo, o Git faz uma cópia (foto) inteira do arquivo que foi modificado e salva ele como um BLOB (Binary Large OBject), e adiciona um identificador. Caso você altere este arquivo ele cria uma nova cópia e adiciona um novo identificador e se um outro arquivo não foi modificado ele só faz um apontamento para o arquivo não modificado. O Git não armazena o diff, ele faz um cálculo para obter a diferença entre os arquivos.

![representação do versionamento do Git](./_img/git.png)

### Comandos:

- git log - listar os commits do repositório.
- git add - sobe alterações para a staging area.
- git commit - realiza novos commits.
- git commit --amend - substitui o commit anterior por um novo, mas aproveita as alterações dele.
- git diff - calcula a diferença entre as versões/alterações dos arquivos.
- git commit --amend - modifica um commit já feito. Ele cria um novo identificador para o commit.

## 🚗 Pista Rápida: Dia 6

Ao utilizar um git amend para substituir um commit que já foi para o repositório remoto, ele vai dar um erro ao fazer o push, pois vai sobrescrever o hash do commit, sendo necessário fazer um pull para resolver o problema. Commits são imutáveis

### Comandos:

- git commit -m "mensagem" - atalho para fazer novos commits.
- git push - empurrar alterações locais para o origin.
- git push --force - empurrar de forma forçada alterações locais para o origin.
- git push -f - a forma comprimida do comando anterior.

## 🚗 Pista Rápida: Dia 7

## Client e Server

Algumas pessoas começam a se confundir sobre quem é o client e quem é o server, pois eles não são papeis fixos e dependem do que exatamente estes componentes estão fazendo. Ter a modelagem correta na mente sobre isso é algo valioso, pois ela destrava novas percepções sobre a arquitetura de todos os softwares envolvidos em um sistema.

É importante saber que esses papeis não são fixos e depende de como está funcionando essa relação. O cliente pode se tornar servidor a partir do momento que ele estiver SERVINDO um outro cliente e um servidor pode se tornar cliente quando está CONSUMINDO outro serviço de outro servidor. Por exemplo:

![relação cliente servidor](./_img/client-server.png)

Principle of Least Privilege (Princípio do Menor Privilégio ), para uma maior segurança dos sistemas é importante liberar a menor quantidade de privilégios. Porque tudo isso pode ser um vetor de falhas segurança.

## 🚗 Pista Rápida: Dia 8

## Programação "Orgânica" versus "Impressora 3D"

- O que é Over Engineering?

  - Over Engineering é um termo utilizado para descrever um projeto que é mais complexo do que o necessário para resolver o problema que ele se propõe a resolver.

- O que é Feature Creep?
  - O Feature Creep, também conhecido como inchaço de recursos, é uma situação em que seu site tem muitos recursos, dificultando o uso e a navegação dos visitantes.

## Por que meus projetos sempre dão certo?

O Lixo de um é o tesouro do outro. Prestar atenção que o seu tesouro pode não ser o do outro e tudo bem :).

## 🚗 Pista Rápida: Dia 9

## Qual o “segredo” para organização de tarefas?

- Fazer muito com pouco e não pouco com muito... esse é um dos segredos que eu percebi quando o assunto é organização de tarefas.

Um ponto importante que o Filipe comentou nessa aula é sobre anotar os objetivos e deixar elas expostas para que possamos ver quais são as metas que precisam ser alcançadas. Isso envolve ter organização e anotação do que precisa ser feito, como um to-do list. Existem atividades que são mais ou menos custosas de serem feitas e é importante usar uma abordagem que sempre possamos ter um saldo positivo ao realizar elas.

![modelo mental](./_img/modelo-mental.png)

# Organização de tarefa

---

Fazer muito com pouco.

Planejamento grande e pouco resultado.

Planejar pouco e executar.

Nível 1:

`Ser lembrado individualmente`

Fazer um lembrete diário para fazer o projeto;

Menor custo de produção;(quanto custa de energia);

Menor tempo de aquecimento;(quanto tempo demora para ver conferir o que precisa ser feito.);

`DICA: Anotar num papel e deixar em cima da mesa`;

Nível 2:

`Ser lembrado em grupo`;

`Dica: por algum papel grande em algum lugar comum;`

Nível 3:

`Expandir conhecimento`

Poder de conversar e desenvolver de forma detalhada `“o que?”` e `“como?”` algo deve ser feito;

Trello ou github;

Desenvolver conhecimento lá dentro;
!CUIDADO: esse é mais trabalhoso, tem de ir ativamente atrás;

Nível 4:

`Gerar métricas`;

Mensurar produtividade de pessoas trabalhando nas tarefas;

Carga adicional que serve mais para o gestor que para ela;

---

## Como peitar projetos de qualquer tamanho?

Você gosta de comer pedra? Não responde ainda! 😂 Deixa eu falar algo antes 🤝

Deixa eu te preparar pra que, se você se pegar numa situação em que o seu cérebro está tentando negociar com você um "tudo ou nada", por exemplo: "ou programa o sistema inteiro que você quer fazer nesse final de semana ou não faz nada" é porque ele quer que você faça nada... sabe por que? A resposta está na aula.

Não existe só o caminho, fazer tudo ou fazer nada. Podemos fazer pouco a pouco, ganhando pouca "recompensa".

Quebra as pedras (entendesse como ideia) em pedaços menores que sejam mais palpáveis. As primeiras marretadas para quebrar a pedra, quebram elas em pedaços não uniformes e esses pedaços são imprevisíveis, difíceis de serem consumidos.

## Criando a primeira Milestone e Issues do Projeto

Nesta Pista Lenta iremos criar tanto a Milestone 0: Em construção, quanto as 3 Issues abaixo:

- Colocar o site num domínio .com.br
- Definir estilização do código e configurar editor
- Programar página de "Em construção"

Fora conversar sobre a mecânica do neurotransmissor mais importante quando o assunto é se sentir motivado a iniciar, continuar e concluir tarefas:

![Estágios da dopamina](./_img/estagios-dopamina.png)

Treinar a disciplina e tomar a rédea das ações é um passo importante.

observação: Uma milestone (marco) é uma atividade maior que vai ser dividida em issues (problemas) menores.

## 🚗 Pista Rápida: Dia 10

Não sei se você notou, mas a gente está passando um pente fino em tudo e no Dia 10 não vai ser diferente. Eu digo isso porque eu já conversei com muitos desenvolvedores seniores que eram “seniores ocos”... e eu não estou querendo machucar ninguém falando isso. Primeiro porque é algo muito comum, muito mais comum do que muita gente que ainda não é sênior possa imaginar que seja assim, e segundo e mais importante, nas conversas que eu tive, a própria pessoa revelava isso (de ter essa insegurança) e isso foi um dos grandes motivos de eu colocar na mensagem principal do curso.dev…que "se sentir competente em programação começa aqui".

Então pra isso acontecer, pra de verdade se sentir completamente competente, não tem pra onde escapar... é preciso trabalhar o lado pessoal/profissional e o lado técnico e o Dia 10 junta essas duas coisas 💪.

## Uma história macabra sobre "Estilização de Código"

É importante manter sempre um estilo de código para termos padronização no código. Para isso podemos utilizar algumas ferramentas para isso como [EditorConfig](https://editorconfig.org/), dependendo do projeto podemos ter vários programadores e cada um com seu estilo de codar, assim o projeto pode ficar bagunçado e sem padrão.

## Configurar o EditorConfig

O EditorConfig é um Configurador de Editor e por ele a gente vai definir regras fundamentais de como o seu Editor deve se comportar como, por exemplo, qual a largura da indentação do código, se será uma indentação mais curta ou mais comprida e se nela deve usar o caractere de espaço ou tab. Mas importante destacar que essas regras irão acontecer antes de você salvar um arquivo.

## Configurar o Prettier

Prettier é um formatador de código opinativo. Ele impõe um estilo consistente analisando seu código e imprimindo-o com suas próprias regras que levam em consideração o comprimento máximo da linha, encapsulando o código quando necessário.

## 🚗 Pista Rápida: Dia 11

DNS (Domain Name System) converte o domínio em um endereço IP.

![Tabela de DNS](./_img/dns-table.png)

O fluxo de acesso ao um servidor dns pode ser exibido da seguinte forma, porém a mecânica dele não funciona. Porque quem acessa realmente o servidor é o cliente (pc de acesso) não o servidor de DNS. O servidor DNS só traduz o domínio.

Fluxo de acesso ao servidor DNS:
![fluxo de acesso](./_img/access-flow.png)

Mecânica de funcionamento:
![mecânica de acesso ao servidor dns](./_img/mecanic-dns.png)

O servidor servidor de DNS fornece o IP do domínio e entrega para o cliente e ele acessa o site (sistema).

## Você conseguiu encontrar o link secreto!

Dica bônus do Filipe, não somos apenas usuários, devemos ter curiosidade, devemos testar, função sem medo. Não devemos ter medo que nossa aplicação quebre, temos que mexer, ser curioso.

## Resolução de DNS (Desafio Nível 2)

Arquitetura hierárquica de como é obtido o IP de um servidor através do DNS

![Arquitetura hierárquica](./_img/architecture-dns.png)

Porém essa forma de acesso pode ser muito custosa e esse dados não vão mudar. Então no meio disso é usado o TTL (Time To Live), o TTL é uma estratégia de cache de quanto tempo um registro deve ser mantido em cache. Todos os passos podem ser e devem ser cacheados para reduzir o tempo da consulta, por isso ao alterar um dns ele leva um tempo para se propagar.

## 🚗 Pista Rápida: Dia 12

Foi configurado um domínio e foi apontando para o servidor de dns da Vercel [meu site](https://gabrielbmcode.com.br/). Houve também um capture the flag.

## 🚗 Pista Rápida: Dia 13

## Página "Em Construção" e Encerramento da Milestone 0

...
Em paralelo a isto, eu apresento a Ideia McDonalds e mostro como eu usei ela para destravar o desenvolvimento de times em situações da vida real e também para conseguir destravar as minhas próprias ideias 🤝
...
Ideia MC Donalds ou teoria MC Donalds ela ajuda a destravar e engajar alguma ideia. Ao estar em uma equipe tentando ter uma ideia e as pessoas não conseguem fluir, é sugerido algo bizarro, sem compromisso, isso acaba dando um ponta pé inicial. Ao dar uma ideia "ruim" seu próprio cerebro irá produzir outras ideias para se afastar da ideia ruim. Isso serve ao estar em uma equipe, quanto estiver só

## Não confie em nenhum serviço 🛑

...Agora, uma coisa que você não pode confiar e que não existe, é 100% de Uptime, ou seja, um serviço consiga dentro de um ano ficar online 100% do tempo nos mais de 31 milhões de segundos que um ano tem.

Esse acordo de uptime é definido através de um SLA (Service Level Agreement / Acordo de Nível de Serviço).

## 🚗 Pista Rápida: Dia 14

## 🎁 Bônus: PoC e MVP ajudam mesmo?

Que massa que você acessou a aula bônus e nela vamos conversar sobre uma confusão relacionada aos termos PoC e MVP.

- PoC (Proof of Concept / Prova de Conceito)
- MVP (Minimum Viable Product / Mínimo Produto Viável)

A POC pode ser feita a seguinte analogia, ao ter um grande navio para encontrar um porto o que é mais fácil, levar um barco menor com uma pessoa, ou levar o navio inteiro?.
Um MVP muito bem aplicado é criar de forma ULTRA SIMPLES E ULTRA FOCADO uma feature, sem criar sombras em outras funcionalidades. Isso é um MVP muito bem aplicado.

- POC: Trata-se de um exercício, uma maneira de verificar se uma ideia é, antes de tudo, viável num determinado contexto de negócio. Esse método é excelente, sobretudo ao lidarmos com inovação envolvendo alto risco de entraves e problemas (o que eu diria é o mais comum de se vivenciar no processo de desenvolvimento de software).

- MVP: Principalmente presente no contexto de startups, mas não restrito a ele, um MVP é uma possibilidade de versão inicial de um produto, lançado com foco total na resolução da principal dor do usuário, bem como na experiência dele. Embora possa parecer, não se confunde com uma versão simplificada ou um protótipo de produto, muito menos uma POC. Pelo contrário, é um produto completo com seu mínimo necessário, ou seja, feito com mais rapidez e menos demanda de desenvolvimento, porém que é para ser lançado e tem-se o intento de ser utilizado pelo consumidor final.

### Resumindo

- PoC: Testes iniciais, com o menor custo possível, feitos para decidir qual caminho o projeto seguirá.
- MVP: Produto minimamente funcional para atender e resolver um problema, de acordo com a decisão tomada a partir dos testes (PoCs).
- Ou seja, os dois deveriam andar juntos, não ignorando nenhum deles no momento de planejar um grande projeto para evitar o máximo possível gastos desnecessários e retrabalhos no meio do projeto.

![mvp](./_img/mvp.png)

Mais informações: [POC, MVP, protótipo e piloto: qual a diferença e quando utilizar cada um?](https://www.cursospm3.com.br/blog/poc-mvp-prototipo-piloto-diferenca/) e [Melhorando o entendimento do MVP](https://cleitonmafra.medium.com/melhorando-o-entendimento-do-mvp-a486d5161dd2)

## Inauguração Milestone 1: Fundação

Uma conexão persistente (conexão persistente HTTP) é um canal de comunicação de rede que permanece aberto para mais solicitações e respostas HTTP ao invés de fechar após uma única troca. É um websocket

## Uma história macabra sobre "Overengineering"

Esta é mais uma aula que vai trazer experiência da vida real e que eu tento passar um pouco da minha "imunidade tecnológica" para você no que trata de algo que pode matar o seu projeto, o temido e confuso Overengineering.

Programar de mais o software e aplicar muita engenharia nele pode ser problemático. É melhor criar softwares simples e ir melhorando ele, do que criar softwares complexos e simplificar ele. ALGO SIMPLES NÃO É ALGO MAL FEITO.

Exemplo da evolução do código (kkkk verdade)

![código simples](./_img/simple-code.png)

Porém um código simples não é um código mal feito, coisa que fazemos quando começamos a carreira, o ideal é encontrar um ponto de equilíbrio:

![ponto de equilíbrio, código](./_img/balance-code.png)

Pode ser mais difícil criar algo simples pode ser mais difícil do que algo mais complexo, pois o custo mental é maior.

O Software deve ser modificável, criar um software com a stack "perfeita", mas que não exista documentação ou que não existam profissionais para contribuir pode ser um problema. O software precisa ser modificável no curto, médio e longo prazo. Então a principal característica de um software śer modificável:

![software modificável](./_img/modifiable.png).

## Proposta de Arquitetura e Pastas

Arquitetura de software não tem a ver com organização das pastas, são duas coisas separadas. A arquitetura de software é definida pelo escopo dos componentes onde começam e terminam em conjunto com a interação entre eles.

Um exemplo de underengeerning é quando um software tem diversos códigos sem começo e fim, espalhados, sem seguir uma separação lógica.

A arquitetura MVC (Model View Controller) foi inventada em 1979 e é uma das mais simples. Dica: Uma arquitetura simples MVC com uma boa modelagem.

Arquitetura de Software não está ligada diretamente a organização de pastas, mas sim nas definições de escopos de funcionalidades/módulos e o relacionamento/interação entre eles.

## 🚗 Pista Rápida: Dia 15

Eu não to brincando quando eu falo que o Dia 15 pode mudar de verdade a sua vida na programação, isso porque ela ficou reservada para falar sobre Testes Automatizados e que é um tema que, se você engata, se você entende os benefícios e usa pra programar de uma forma melhor e mais despreocupada, muda completamente o seu fluxo de trabalho e é um caminho sem volta... sem volta mesmo!
