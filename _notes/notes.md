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

## Pista Rápida: Dia 05

O Git funciona com versionamento distribuído. Ponto importante, o Git não salva somente as diferenças entre os arquivos que nem o CVS, por isso ele é mais rápido, porque não há necessidade de processar arquivos antigos para chegar no atual, mas acaba ocupando mais espaço.

Resumindo, o Git faz uma copia (foto) inteira do arquivo que foi modificado e salva ele como um BLOB (Binary Large OBject), e adiciona um identificador. Caso você altere este arquivo ele cria uma nova cópia e adiciona um novo identificador e se um outro arquivo não foi modificado ele só faz um apontamento para o arquivo não modificado. O Git não armazena o diff, ele faz um cálculo para obter a diferença entre os arquivos.

![representação do versionamento do Git](./_img/git.png)

### Comandos:

- git log - listar os commits do repositório.
- git add - sobe alterações para a staging area.
- git commit - realiza novos commits.
- git commit --amend - substitui o commit anterior por um novo, mas aproveita as alterações dele.
- git diff - calcula a diferença entre as versões/alterações dos arquivos.
- git commit --amend - modifica um commit já feito. Ele cria um novo identificador para o commit.

## Pista Rápida: Dia 6

Ao utilizar um git amend para substituir um commit que já foi para o repositório remoto, ele vai da um erro ao fazer o push, pois vai sobrescrever o hash do commit, sendo necessário fazer um pull para resolver o problema. Commits são imutáveis

### Comandos:

- git commit -m "mensagem" - atalho para fazer novos commits.
- git push - empurrar alterações locais para o origin.
- git push --force - empurrar de forma forçada alterações locais para o origin.
- git push -f - a forma comprimida do comando anterior.

## Pista Rápida: Dia 7

## Client e Server

Algumas pessoas começam a se confundir sobre quem é o client e quem é o server, pois eles não são papeis fixos e dependem do que exatamente estes componentes estão fazendo. Ter a modelagem correta na mente sobre isso é algo valioso, pois ela destrava novas percepções sobre a arquitetura de todos os softwares envolvidos em um sistema.

É importante saber que esses papeis não são fixos e depende de como está funcionando essa relação. O cliente pode se tornar servidor a partir do momento que ele estiver SERVINDO um outro cliente e um servidor pode se tornar cliente quando está CONSUMINDO outro serviço de outro servidor. Por exemplo:

![relação cliente servidor](./_img/client-server.png)

Principle of Least Privilege (Princípio do Menor Privilégio ), para uma maior segurança dos sistemas é importante liberar a menor quantidade de privelegios. Porque tudo isso pode ser um vetor de falhas segurança.

## Pista Rápida: Dia 8

## Programação "Orgânica" versus "Impressora 3D"

- O que é Over Engineering?

  - Over Engineering é um termo utilizado para descrever um projeto que é mais complexo do que o necessário para resolver o problema que ele se propõe a resolver.

- O que é Feature Creep?
  - O Feature Creep, também conhecido como inchaço de recursos, é uma situação em que seu site tem muitos recursos, dificultando o uso e a navegação dos visitantes.

## Por que meus projetos sempre dão certo?

O Lixo de um é o tesouro do outro. Prestar atenção que o seu tesouro pode não ser o do outro e tudo bem :).

## Pista Rápida: Dia 9

## Qual o “segredo” para organização de tarefas?

- Fazer muito com pouco e não pouco com muito... esse é um dos segredos que eu percebi quando o assunto é organização de tarefas.

Um ponto importante que o Filipe comentou nessa aula é sobre anotar os objetivos e deixar elas de expostas para que possamos ver quais são as metas que precisam ser alcançadas. Isso envolve ter organização e anotação do que precsia ser feito, como um to-do list. Existem atividades que serão mais ou menos custosas de serem feitas e é importante usar uma abordagem que sempre possamos ter um saldo positivo ao realizar elas.

![modelo mental](./_img/modelo-mental.png)

# Organização de tarefa

---

Fazer muito com pouco.

Planejamento grande pouco resultado.

Planejar pouco e executar.

Nivel 1:

`Ser lembrado individualmente`

Fazer um lembrete diário para fazer o projeto;

Menor custo de produção;(quanto custa de energia);

Menor tempo de aquecimento;(quanto tempo demora para ver conferir o que precisa ser feito.);

`DICA: Anotar num papel e deixar em cima da mesa`;

Nivel 2:

`Ser lembrado em grupo`;

`Dica: por algum papel grande em algum lugar comum;`

Nivel 3:

`Expandir conhecimento`

Poder de conversar e desenvolver de forma detalhada `“o que?”` e `“como?”` algo deve ser feito;

Trello ou github;

Desenvolver conhecimento la dendo;
!CUIDADO: esse é mais trabalahoso, tem de ir ativamente atras;

Nivel 4:

`Gerar métricas`;

Mensurar produtividade de pessoas trabalhando nas tarefas;

Carga adicional que serve mais para o gestor que para ela;

---

## Como peitar projetos de qualquer tamanho?

Você gosta de comer pedra? Não responde ainda! 😂 Deixa eu falar algo antes 🤝

Deixa eu te preparar pra que, se você se pegar numa situação em que o seu cérebro está tentando negociar com você um "tudo ou nada", por exemplo: "ou programa o sistema inteiro que você quer fazer nesse final de semana ou não faz nada" é porque ele quer que você faça nada... sabe por que? A resposta está na aula.

Não existe só o caminho, fazer tudo ou fazer nada. Podemos fazer pouco a pouco, ganhando pouca "recompensa".

Quebra as pedras (entendesse como ideia) em pedaços menores que sejam mais paupáveis. As primeiras marretadas para quebrar a pedra, quebram elas em pedaços não são uniformes e esses pedaços são imprevisiveis, difíceis de serem consumidos.

## Criando a primeira Milestone e Issues do Projeto

Nesta Pista Lenta iremos criar tanto a Milestone 0: Em construção, quanto as 3 Issues abaixo:

- Colocar o site num domínio .com.br
- Definir estilização do código e configurar editor
- Programar página de "Em construção"

Fora conversar sobre a mecânica do neurotransmissor mais importante quando o assunto é se sentir motivado a iniciar, continuar e concluir tarefas:

![Estágios da dopamina](./_img/estagios-dopamina.png)

Treinar a disciplina e tomar a rédea das ações é um passo importante.

observação: Uma milestone (marco) é uma atividade maior que vai ser dividida em issues (problemas) menores.

## Pista Rápida: Dia 10

Não sei se você notou, mas a gente está passando um pente fino em tudo e no Dia 10 não vai ser diferente. Eu digo isso porque eu já conversei com muitos desenvolvedores seniores que eram “seniores ocos”... e eu não estou querendo machucar ninguém falando isso. Primeiro porque é algo muito comum, muito mais comum do que muita gente que ainda não é sênior possa imaginar que seja assim, e segundo e mais importante, nas conversas que eu tive, a própria pessoa revelava isso (de ter essa insegurança) e isso foi um dos grandes motivos de eu colocar na mensagem principal do curso.dev…que "se sentir competente em programação começa aqui".

Então pra isso acontecer, pra de verdade se sentir completamente competente, não tem pra onde escapar... é preciso trabalhar o lado pessoal/profissional e o lado técnico e o Dia 10 junta essas duas coisas 💪.

## Uma história macabra sobre "Estilização de Código"

É importante manter sempre um estilo de código para termos padronização no código. Para isso podemos utilizar algumas ferramentas para isso como [EditorConfig](https://editorconfig.org/), dependendo do projeto podemos ter vários programadores e cada um com seu estilo de codar, assim o projeto pode ficar bagunçado e sem padrão.

## Configurar o EditorConfig

O EditorConfig é um Configurador de Editor e por ele a gente vai definir regras fundamentais de como o seu Editor deve se comportar como, por exemplo, qual a largura da indentação do código, se será uma indentação mais curta ou mais comprida e se nela deve usar o caractere de espaço ou tab. Mas importante destacar que essas regras irão acontecer antes de você salvar um arquivo.

## Configurar o Prettier

Prettier é um formatador de código opinativo. Ele impõe um estilo consistente analisando seu código e reimprimindo-o com suas próprias regras que levam em consideração o comprimento máximo da linha, encapsulando o código quando necessário.
