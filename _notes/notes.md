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

Resumindo, o Git faz uma cópia (foto) inteira do arquivo que foi modificado e salva ele como um BLOB (Binary Large Object), e adiciona um identificador. Caso você altere este arquivo ele cria uma nova cópia e adiciona um novo identificador e se um outro arquivo não foi modificado ele só faz um apontamento para o arquivo não modificado. O Git não armazena o diff, ele faz um cálculo para obter a diferença entre os arquivos.

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

Deixa eu te preparar para que, se você se pegar numa situação em que o seu cérebro está tentando negociar com você um "tudo ou nada", por exemplo: "ou programa o sistema inteiro que você quer fazer nesse final de semana ou não faz nada" é porque ele quer que você faça nada... sabe por que? A resposta está na aula.

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

O fluxo de acesso ao servidor dns pode ser exibido da seguinte forma, porém a mecânica dele não funciona. Porque quem acessa realmente o servidor é o cliente (pc de acesso) não o servidor de DNS. O servidor DNS só traduz o domínio.

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
Ideia MC Donalds ou teoria MC Donalds ela ajuda a destravar e engajar alguma ideia. Ao estar em uma equipe tentando ter uma ideia e as pessoas não conseguem fluir, é sugerido algo bizarro, sem compromisso, isso acaba dando um ponta pé inicial. Ao dar uma ideia "ruim" seu próprio cérebro irá produzir outras ideias para se afastar da ideia ruim. Isso serve ao estar em uma equipe, quanto estiver só

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

Eu não to brincando quando eu falo que o Dia 15 pode mudar de verdade a sua vida na programação, isso porque ela ficou reservada para falar sobre Testes Automatizados e que é um tema que, se você engata, se você entende os benefícios e usa para programar de uma forma melhor e mais despreocupada, muda completamente o seu fluxo de trabalho e é um caminho sem volta... sem volta mesmo!

Texto complementar sobre teste [Testes automatizados: saiba o que são, como e porquê usar!](https://blog.betrybe.com/tecnologia/teste-automatizados/)

## Instalar um Test Runner

Um Test Runner nada mais que um código que testa outro código. Serve para testar de forma automatizada o trabalho que uma pessoa faria, por exemplo um cadastro com e-mail inválido, depois válido e em seguida tentar cadastrar com o mesmo email, etc. Se cadastrar com o mesmo e-mail e retornar erro, é um erro esperado, etc. Verifica se uma parte do sistema está funcionando de forma correta. Caso se uma das condições esperadas não sejam atendidas, como por exemplo o sucesso ao cadastrar com um email duplicado, isso é uma falha.

É válido que iremos por um sistema no ar sem REGRESSÃO.

## Criar um "Teste de Teste"

Nos testes automatizados é possível criar a feature e depois testar, mas o ideal é criar o teste para depois criar a feature.

Um teste pode se dizer que temos dois lados, na esquerda é um valor dinâmico, na direita o valor esperado pode ser hardcoded, inclusive é aconselhável que seja hardcoded.

![Teste automatizado](./_img/first-test.png)

## Criar um "Teste de Verdade"

Um teste não tem a capacidade de afirmar que um código está funcionando, ele tem a capacidade de afirmar se algo aconteceu ou não. Ele serve para montar cenários para testar a implementação por vários ângulos. Não seja "fofo" ao criar cenários de testes, o intuito não é só escrever códigos que passam pelo caminho feliz, tenha o contrário.

Um teste pode servir como uma documentação do sistema, pois ele roda um cenário real. Já um documento externo pode ficar desatualizado. O teste deve cobrir todas as variações de entrada.

O TDD (Test Driven Development / Desenvolvimento Orientado a Teste), podemos traduzir isso de outra forma, Desenvolvimento Orientado Por / Pelo Testes. Os testes devem orientar o desenvolvimento. Primeiro a gente específica no teste o que é esperado que nosso programa faça e depois escreve esse programa.

Para saber mais: [TDD: o que é e por que vale pena](https://blog.betrybe.com/tecnologia/tdd-test-driven-development/)

Isso pode a ajudar a ficar criativo, pois podemos pensar em cenários diversos que o usuário está.

Não necessariamente as pessoas sempre escrevem o código com TDD. Pode ter ocasiões, por exemplo, de quando a pessoa está cansada e só faz a feature e depois ele vai aplicar o teste. O teste é uma malha de proteção para o sistema.

## 🚗 Pista Rápida: Dia 16

Comentário lgalvani:

- Testes unitários: Esses testes focam em componentes individuais, como funções ou métodos, garantindo que cada pequena parte do sistema funcione corretamente de forma isolada.

- Testes de integração: Depois que os componentes individuais funcionam, é hora de verificar se eles funcionam corretamente juntos. Componentes individuais que passaram nos testes unitários podem falhar totalmente quando são integrados, geralmente devido a falhas de comunicação de dados. Os testes de integração garantem que os dados fluam corretamente entre os módulos e que as interfaces sejam sólidas.

- Testes E2E: Os testes ponta a ponta validam toda a aplicação, desde a interface do usuário até o back-end, garantindo que o sistema funcione como um todo. Esses testes proporcionam alta confiança no atendimento aos requisitos de negócios, mas são mais lentos e complexos. Por causa disso, eles devem ser limitados a fluxos de trabalho críticos para evitar instabilidade.

## A maior briga no universo dos Testes Automatizados

Testes Automatizados é um assunto tão importante quanto ele é passível de gerar briga na internet e nessa aula eu vou mostrar o motivo. É muito importante você estar preparado para esse tipo de discussão, principalmente sobre a diferença entre testes `unitários`, `integração` e `e2e` 💪.

A ordem dos testes importa! Esse é um norte padrão de quantidade de testes que seu sistema deve ter junto com a representação de quantidade de teste

Pirâmide que norteia ![Pirâmide de teste](./_img/pyramid-test.png)

Mas existe a discussão sobre outros modelos de teste conforme o exemplo abaixo:
X do usuário @swyx

![twitter](./_img/twitter.png)

![Teste troféu](./_img/test-trophy.png)

![Teste favo de mel](./_img/test-honeycomb.png)

Novo termo API First: Significa que tudo que um cliente consiga fazer no sistema, disponibilizar isso primeiro através da API Rest.

## Encostando a mão no Protocolo HTTP 🔥

Endpoint (ponto final), é o local final onde uma requisição vai chegar. Tudo basicamente pode ser definido com um endpoint, por exemplo `google.com`, porém esse termo é utilizado no contexto de API (Application Programming Interface / Interface de Programação de Aplicações).

Tudo pode ser interpretado como interface, e as interfaces podem ser um CLI, uma página na web, uma função, o microondas possui uma interface, tudo que interagimos temos um interface.

Tipos de interfaces:

- TUI: Text-based User Interface / Interface de Usuário baseado em texto (utilizado em terminal).
- GUI: Graphical User Interface / Interface de Usuário Gráfica (comumente a mais utilizada por usuário em geral).

No Next é também é possível criar os end-points através do File-based routing.

CURL é um Client URL de terminal. Exemplo de chamada do curl no terminal!

[curl](./_img/curl.png)

as setas com o sinal de maior `>` representa a request, já as setas com o sinal de menor representa `<` a response, o `*` são ações internas do próprio curl

## Não é magia! (é Protocolo)

Eu sugiro você ter um único objetivo com estas aulas mais recentes, que é acreditar que, na área de tecnologia ou na programação num geral, não existe magia... não existe mesmo! Toda informação está em algum lugar e você pode não conhecer esse lugar e naturalmente assumir que é um local mágico, mas não é.

Então nesta aula nós iremos cavar um pouco mais o Protocolo HTTP na procura de informações que muitas pessoas encaram como "mágicas" 💪

## Versionamento de API e Endpoint "/status"

A API pode mudar, porém ela muda menos que uma interface. Quando ela precisa mudar, ela muda as informações que estão sendo desenvolvidas. Essas mudanças podem ser organizadas em duas categorias: Breaking Change e Non-breaking Change.

Uma mudança Breaking Change é do tipo que pode quebrar a integração, por exemplo a interface, quebrou o contrato entre o client e o server. Exemplo: alterei um campo chamado anteriormente de nome_de_usuario para username. Isso vai quebrar, porque o código que fazia a leitura desses scripts não irá identificar o campo.

Uma mudança Non-breaking Change é uma mudança que não quebra a integração, por exemplo a adição de um campo novo em um object, nenhum script deveria depender de uma informação que ainda não existe, exemplo de um objeto de pessoa { nome: "Gabriel" } eu adicionar o campo de altura { nome: "Gabriel", altura: "183" }. Mas essa situação pode ocorrer, mas não deveria, é uma convenção que a adição de novos campos não quebre a API.

É possível fazer o versionamento de APIs, a estratégia mais comum existente é URI Path Versioning, onde é adicionado no endpoint a versão que vai ser utilizada e o outro método é o Header Versioning onde é adicionado no cabeçalho da requisição versão.

![Versionamento API](./_img/version-api.png)

## 🚗 Pista Rápida: Dia 17

## Qual Banco de Dados escolher?

feature-proof significa a prova do futuro
A escolha de um banco de dados deve se levar em consideração alguns pontos:

- _DBMS - Data Base Management System ou SGBD - Sistema de gerenciamento de banco de dados. Exemplos de SBGD / DBMS_

  - Mysql
  - PostgreSQL
  - Oracle Database
  - MongoDB

- Tipos de bancos:
  - Relacional
  - Não Relacional
    - Armazenamento de Documentos
    - Armazenamento Chave-Valor
  - Série Temporal
  - Espacial

Geralmente é escolhido bancos relacional e não relacional. Vamos utilizar o PostgreSQL no banco

- _Query - Consultas_

  Para fazer as consultas em uma aplicação geralmente é usado um ORM (Object-Relational Mapping / Mapeamento Objeto-Relacional). Ele tenta abstrair o SQL através de métodos. Ele também abstraí a conexão com o banco e a aplicação, também ele ajuda na hora que você mudar o banco, as consultas já feitas não quebrarem. Como ORM iremos usar o pg (postgres-node).

- _Migrations - Migração_

  É uma forma de documentar as mudanças realizadas no banco de dados. É a forma de também de ter o controle de forma programática do banco, um tipo de versionamento, pois a alteração não foi feita de forma manual e sem documentação. E para fazer as migrações iremos usar o node-pg-migrate.

## Por que o Docker dominou o mundo?

![Container e virtualizador](./_img/virtualizador-container.png)

## Subir Banco de Dados (Local)

YAML acrônimo recursivo para “YAML Ain’t Markup Language”.
O YAML é um super set para o JSON, mas ele parece mais com Python. Ele define a hierarquia dos elementos através da indentação, utilizando espaços em branco, ele não aceita usar o tab para fazer isso.

O arquivo Dockerfile é um código fonte que define os comandos que vão formar o ambiente virtual. O Dockerfile precisa ser compilado, e ele vira uma Image, e ao executar ele se transforma em um Container é na prática uma Image que está rodando, porém é no Container que vamos nos conectar.

![Dokcer File](./_img/docker-file.png)

É possível subir essa Image para o Docker Hub.

Segue os comandos para quem deseja instalar o Docker na máquina local:

```shell
# INSTALAR DEPENDÊNCIAS:
sudo apt-get install  curl apt-transport-https ca-certificates software-properties-common

# INSERIR CHAVE GPG:
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# ADICIONAR REPOSITÓRIO:
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

# ATUALIZAR REPOSITÓRIO:
sudo apt update
sudo apt upgrade
apt-cache policy docker-ce

# INSTALAR DOCKER:
sudo apt install docker-ce

# VERIFICAR STATUS:
sudo systemctl status docker

```

## Se conectando no Banco de Dados (Local)

Conhecer problemas também é conhecimento. Evitar problemas é evitar conhecimentos.

Em protocolos http possui `Status Code` para retornar um tipo de informação, como sucesso e sem autorização, por exemplo.
Em processos existe o `Exit Codes`, no momento que um processo é encerrado ele retorna um código que representa se a saída desse processo teve sucesso ou não na visão do processo. Por convenção a saída 0 representa sucesso, já valores acima disso podem ser problemas, por exemplo 255.

Foi instalado esse client de terminal para se conectar ao Postgres durante a aula:

- `sudo apt install postgresql-client`
