Este é um app criado para integrar o frontend com a API da [space-x](https://github.com/r-spacex/SpaceX-API)

para executalo acesse primeiramente a pasta backend e rode o comando:

`npm install && npm run dev`

e então na pasta front

`npm install && npm start`

Após o backend e frontend estarem rodando, para visualizar o teste A/B, edite o arquivo hosts do computador e adicione o host localhost.com apontando para o ip de loopback 127.0.0.1 e acesse no navegador http://localhost.com:3000, o teste de alternativa vai remover o título do lançamento.

para executar os testes rode o comando `npm run test` em suas consecutivas pastas. 

## Docker

Você também pode utilizar o docker para subir a aplicação na sua máquina, você precisará instalar o docker e o docker-compose em sua máquina. Com isso instalado, basta digitar primeiramente:

`docker-compose build`

e após finalizar com sucesso o comando acima, você pode executar (ctrl + c para finalizar):

`docker-compose up` 

ou para executar em segundo plano :

`docker-compose up -d`

rodando em segundo plano, para finalizar é necessário executar:

`docker-compose down`