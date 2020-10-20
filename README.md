<h1 align="center">
    <img alt="DevRadar" title="DevRadar" src=".github/devradar.svg" width="250px" />
</h1>

<p align="center">
:rocket: Projeto desenvolvido em evento da <a href="https://rocketseat.com.br/">Rocketseat</a>
</p>

## Sobre o repositório
Este repositório contém o projeto desenvolvido durante a semana omnistack 10 promovida pela Rocketseat. Durante o período de uma semana desenvolvemos o backend, o frontend e o app mobile deste projeto usando Node, ReactJs e React Native.

O desenvolvimento consiste em um radar de desenvolvedores, nesta aplicação é possível utilizar o site web para cadastrar contas de desenvolvedores que se integra com a API do Github para buscar informações do dev, e com o app mobile é possível localizar os desenvolvedores que estão a 10 Km de distância de você, apresentando estes devs como pontos no mapa, já que o app integra a API de georreferenciamento.


## Get Started
Para executar este projeto clone o repositório para seu ambiente de trabalho, acesse os diretórios de `backend`, `mobile` e `web` e execute o comando `npm install` no terminal para cada um dos diretórios.

Configure o acesso ao banco de dados da apliação, caso possua o docker instalado basta executar o comando abaixo:

```
docker run --name mongodb -p 27017:27017 -d mongo
```

Caso prefira não utilizar o comando acima, acesse o arquivo [index.js](backend/src/index.js) do diretório `backend/src` e altere a string de conexão na linha 14 para o endereço do banco de dados desejado. Nota, este banco precisa ser o mongodb.

Após realizar os passos descritos a aplicação pode ser executada, execute os seguintes comandos em cada um dos diretórios:
* backend - `npm run dev`
* web - `npm run start`
* mobile - `npm run start` *Nota¹* *Nota²*

Lembre-se que para o site e o app funcionar corretamente é preciso executar o backend primeiro.

*Nota¹* ao executar o comando de inicialização uma janela no seu navegador deve ser apresentada, no canto inferior esquerdo desta janela deve ser apresentado um endereço ip, copie este endereço e substitua o mesmo nos arquivos [api.js](mobile/src/services/api.js) e [socket.js](mobile/src/services/socket.js) do diretório `mobile/src/services` nas linhas 7 e 6 respectivamente.

*Nota²* caso queira abrir o app em seu celular, instale o aplicativo Expo em seu dispositivo, depois utilizando o leitor QR Code do Expo leia o código no canto inferior esquerdo da janela apresentado no navegador.

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

by Mauricio Redmerski André