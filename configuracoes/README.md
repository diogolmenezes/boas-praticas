# Visão Geral

Backend da aplicação responsável pelo Cadastro / Reset de senha da minha oi e pelo cadastro via URA.

## Responsáveis

- Henrique Monteiro <henrique@...>
- Diogo Menezes <diogo@...>

## Rodando o projeto

- `npm start`: inicia o servidor em desenvolvimento.
- `npm run start:prod`: inicia o servidor em produção.
- `npm run start:mock`: inicia o servidor mock.

## Rodando os testes

- `npm test`: roda os testes unitários com os relatorios do nyc
- `npm run test-dev`: roda os testes unitários sem o nyc
- `npm run test-debug`: roda os testes unitários com debugger ativo
- `npm run integration`: roda os testes integrados
- `npm run integration-debug`: roda os testes integrados com debugger ativo

## Urls

### Homologação

- http://xyz01.interno:9999/api

### Produção

- http://api-projeto.interno:9999/api

## Servidores de aplicação

### Homologação

- xyz01

### Produção

- ABC01
- ABC02
- ABC03
- ABC04
- ABC05

## MongoDB

### Homologação

- xyz01.interno:27017/minhaoi

### Produção

- abc06.interno:27017/minhaoi
- abc07.interno:27017/minhaoi
- abc08.interno:27017/minhaoi
- abc09.interno:27017/minhaoi

## Jenkins

- [Deploy da Master](http://uio01.interno/job/PreCadastro/job/cadastro_backend/)
- [Deploy de releases](http://uio01.interno/job/PreCadastro/job/RepositorioCadastro/job/Backend/)
- [Restart da aplicação](http://uio01.interno/job/PreCadastro/job/restart_cadastro_backend/)

## Kibana

### Homologação

- http://ghf01.interno:5601/app/kibana

Indice cadastro-hml*

### Produção

- http://ghf01.interno:5601/app/kibana

Indice cadastro-prd*

## Grafana

- http://kjh01.interno:3000/dashboard/db/cadastro-containers

## Postman

Arquivo de requests do Postman com todas as chamadas do projeto.
[https://www.getpostman.com/collections/ff7d7d8a6f0fa1bd63a1](https://www.getpostman.com/collections/ff7d7d8a6f0fa1bd63a1)