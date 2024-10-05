# Full Cycle: Desafio docker + golang

### Descrição do desafio

> A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

> O retorno da aplicação node.js para o nginx deverá ser: "Full Cycle Rocks!" e Lista de nomes cadastrada no banco de dados.

### Execução

```sh
git clone https://github.com/Werick-Nalyson/desafio-docker-nodejs.git

cd desafio-docker-nodejs

docker-compose up -d
```
