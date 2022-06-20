Este é um app criado para integrar o frontend com a API da [space-x](https://github.com/r-spacex/SpaceX-API)

para executalo acesse primeiramente a pasta backend e rode o comando:

`npm install && npm run dev`

e então na pasta front

`npm install && npm start`

O teste A/B, foi configurado no servidor do heroku [aqui](https://callix-challenge.herokuapp.com/)

para executar os testes rode o comando `npm run test` em suas consecutivas pastas. 

## Docker

Você também pode utilizar o docker, para isso, você precisa ter instalado o docker e o docker-compose em sua máquina. Com isso, basta digitar:

`docker-compose build`

para criar as imagens dos containers em seu computador.

e após finalizar com sucesso o comando acima, para executar o sistema:

`docker-compose up` 

ou para executar em segundo plano:

`docker-compose up -d`

rodando em segundo plano, para finalizar é necessário executar:

`docker-compose down`