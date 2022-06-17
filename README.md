Este é um app criado para integrar o frontend com a API da [space-x](https://github.com/r-spacex/SpaceX-API)

para executalo acesse primeiramente a pasta backend e rode o comando:

`npm install && npm run dev`

e então na pasta front

`npm install && npm start`

Após o backend e frontend estarem rodando, para visualizar o teste A/B, edite o arquivo hosts do computador e adicione o host localhost.com apontando para o ip de loopback 127.0.0.1 e acesse no navegador http://localhost.com:3000, o teste de alternativa vai remover o título do lançamento.

para executar os testes rode o comando `npm run test` em suas consecutivas pastas. 