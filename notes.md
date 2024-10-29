# Minhas anotações

## Pista Lenta - Protocolos e rodando o site de forma local

Existem diversos protocolos e com diferentes objetivos, alguns exemplos:
  * HTTP - HyperText Transfer Protocol
  * FTP - File Transfer Protocol
  * SMTP - Simple Mail Transfer Protocol
  * UDP - User Datagram Protocol

Os protocolos definem um acordo conhecido entre duas partes e como devem se comunicar. Na comunicação entre os protocolos pode ocorrer erros e perda de pacotes, mas existe meios de tentar recuperar esses pacotes perdidos. 

Existem casos que é você quer saber se a informação chegou no ponto final e outros momentos que não é preciso saber disso, por exemplo, na chamada de vídeo onde você pode perder um pedaço da informação mas não tem problema. UDP é um tipo de protocolo que não precisa de uma confirmação de recebimento, é um pacote autocontido, o que é diferente do TCP.

Vídeo da diferença entre o protocolo UDP e TCP [HTML5 Games - UDP vs TCP](https://youtu.be/ZEEBsq3eQmg).



## Pista Lenta - Página inicial

O NextJs faz um roteamento baseado em arquivos, conhecido como File-Based Routing, foi inspirado como o PHP faz as rotas.
Ao adicionar um arquivo chamado index.js/index.ts na pasta pages, ele automaticamente vira uma rota, por exemplo: 
  * pages/index.js ---> / (diretorio real)
  * pages/produtos/index.js ---> /produtos (pasta)
  * recuperar-senha.js ---> /recuperar-senha (arquivo)

Reponsabilidade do Next e do React. React vai entregar os objetos concretos, como os componentes visuais, o Next vai fazer o roteamento desses arquivos