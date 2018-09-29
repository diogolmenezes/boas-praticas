# Manual para inicio de projetos

Esse manual visa prover informações basicas sobre os processos necessários na criação de um novo projeto.

Utilize como referência e complemente caso alguma nova informação seja necessária.

## Criando uma nova aplicação

### Backend - Bootstrap

Para criar uma nova aplicação backend nodejs inicie criando um projeto padrão utilizando 
o oi-node-api-bootstrap.

Esse bootstrap criará a base de um projeto utilizando o framework da empresa, que de trará facilidades de log, cache, 
conexão ao banco de dados, auditoria etc.

### Backend - Bootstrap Minha Oi

Para criar uma nova aplicação backend nodejs dentro do universo da Minha Oi, inicie criando um projeto padrão utilizando 
o minhaoi-node-bootstrap.

Esse bootstrap criará a base de um projeto utilizando o framework node e o framwrowk da minha oi, que de trará facilidades de log, cache,conexão ao banco de dados, auditoria, acesso aos serviços comuns, autorização etc.

### Frontend

COI

MCOI 

## Solicitação de maquinas

Toda squad deve ter um pool de maquinas de homologação e produção para hospedar seus projetos. 

Essas maquinas servirão para prover serviços de backend e frontend de homologação e produção.

Para solicitar um pool de máquinas, você precisará abrir uma ARS para a categoria XYZ coma a seguinte descrição:

```
Solicito a disponibilização de 5 maquinas com X GB de memoria para hospedar os projetos de backend em produção da squad X.

Solicito a disponibilização de 8 maquinas com X GB de memoria para hospedar os projetos de frontend em produção da squad X.

Solicito a disponibilização de 1 maquina com X GB de memoria para hospedar os projetos de backend em homologação da squad X.

Solicito a disponibilização de 1 maquina com X GB de memoria para hospedar os projetos de frontend em homologação da squad X.
```

## Firewall

Caso sua aplicação precise acessar algum serviço interno ou externo, você precisará entender se é necessário a liberação de firewall nas maquinas de homologação e produção.

Se constatado que é necessário a liberação, você precisará abrir uma ARS para a categoria XYZ com a seguinte descrição:

```
Solicito liberação de Firewall nas maquinas A, B, C e D cujos ips são respectivamente 1, 2, 3 e 4 para o serviço http://servico
```

## Criação de FileSystem

Toda aplicação no ambiente de homologação (staging) e produção, necessitará de um filesystem. O filesystem é o local onde os dados da aplicação ficarão armazenados.

Cada aplicação deve ter seu próprio filesystem pois dessa forma temos independencia entre os diversos projetos 
fazendo com que a falta de espaço em um projeto não impacte seu vizinho.

Para solicitar a criação do filesystem você deverá procurar a equipe de DEVOPS e abria ARS para a categoria XYZ, com a seguinte descrição:

```
Solicito a criação de filesystem com 20 GB nas maquinas A, B, C e D para o projeto Y. O nome do filesystem deverá ser /nome-do-projeto
```

## Criação de Pipeline

Para que uma aplicação seja entregue nos diversos ambientes da aplicação (DEVELOPMENT, TESTING, STAGING e PRODUCTION) a aplicação deve passar por um pipeline no jenkins
que será responsavel por essas entregas.

Você pode iniciar a criação do pipeline milti-branch através do criador de jobs X ou, solicitar ajuda da equipe de DEVOPS.

## Criação de banco de dados

O digital já possui uma estrutura de banco de dados MongoDb nas maquinas XYZ, para criar um novo banco, basta solicitar um novo usuário e database para o setor XYZ.

Para criação de um banco de dados ORACLE você precisará abrir uma ARS para a categoria XYX com a seguinte descrição:

```
Solicito a criação de um banco de dados Oracle para a aplicação XYZ.
```

## Redis - Cache

Para criar utilizar a estrutura de REDIS da Minha Oi, você precisará entrar contado com os responsáveis pelo projeto para receber o endereço e a credencial.

Caso você precise de uma estrutura própria de REDIS, será necessãrio criar uma ARS para a categoria XYZ com a seguinte descrição:

```
Solicito a criação de uma estrutura de alta disponibilidade de REDIS para o projeto XYZ.
```

## Configuração do Sonar

As aplicações digitais devem ter sua cobertura de testes monitorada pelo Sonar.

Para configurar sua aplicação você deverá procurar a equipe de DEVOPS e solicitar apoio para a criação e configuração na estrutura do sonar.

## Load Balancer e DNS

Para criar um load balancer para sua aplicação em produção, será necessário abrir uma ARS passar a categoria XYZ com a seguinte descrição:

```
Solicito a criação de um load balancer para as maquinas A, B, C e D na porta 9999 que responda no nome http://meuprojeto.interno:9999
```

Esse procedimento é necessário no ambiente de produção para que todas as maquinas possam ser balanceadas e um nome possa ser definido para esse balanceamento.

## Proxy reverso

O endereço do load balancer da sua aplicação backend é interno, só funciona dentro da rede da Oi. Para que esse endereço possa ser acessado de forma
da rede ( internet ) é necessário que eles sejam mapeados e expostos. Para isso é necessário criar o mapeamento de proxy reverso.

Esse mapeamento faz um de x para de um endereço interno para um endereço externo, como por exemplo:

http://meuprojeto.interno:9999/demandas   >   /api/demandas

Para criar um proxy reverso no apache, você precisará abris uma ARS para a categoria XYX com a seguinte descrição:

```
Solicto a criação proxy reverso para as maquinas ( maquinas do frontend) com as seguintes definições:

ProxyPass /meu/endereco/externo/demandas http://http://meuprojeto.interno:9999/demandas
ProxyPass /meu/endereco/externo/login http://http://meuprojeto.interno:9999/login
```

## Documentos e Desenhos

É importante que todos os projetos tenham x tipos de documentos e desenhos:

- Arquivo com a configuração do proxy reverso. LINK_DE_EXEMPLO
- Arquivo com o desenho contendo todas as maquinas, com seus IPS e endereços DNS. LINK_DE_EXEMPLO
- Arquivo com o relacionamento entre a aplicação e suas integrações. LINK_DE_EXEMPLO
- Arquivo com as APIs e seus consumidores. LINK_DE_EXEMPLO

## Manual de operação - MOP

Todas as aplicações devem ter um MOP. O MOP é o documento utilizado pela equipe de operações para entender e encontrar possiveis problemas em um projeto.

Esse documento contem informações de capacidade da máquina, IPS, endereços, descrição funcional do objetivo da aplicação, desenhos da infra estrutura, integrações com requests e responses, localização dos logs, 
informações sobre restarts, expurgos e exemplos de uso.

Todo que pode vir a ser necessário no processo de suporte e contingencia de um problema.

O MOP deve ser criado e compartilhado com a equipe de operações da empresa. Nenhuma aplicação pode subir para produção sem passar pelo processo de criação do MOP.

EXEMPLO_DE_MOP

## Teste de Segurança

Todas os projetos e funcionalidades novos devem ser analisados e liberados pela equipe de segurança.

Para solicitar uma avaliação, procure a equipe de segurança, eles irão pedir para que você defina em um documento os pondos que devem ser testados.

## Logs e Kibana

O digital tem sua propria estrutura de Kibana em http://XYZ.

Caso você queira colocar sua aplicação nessa estrutura, será necessário comunicar o setor XYZ para que a analise de espaço em disco seja realizada.

Toda aplicação precisa de dashboards e visualizações que consigam representar o momento da aplicação em relação a metas de negocio e em relação aos erros ocorridos.

Para que você consiga ter um otimo dashboard e capacidade de rastreamento de erros, é necessário que a aplicação tenha uma otima cobertuda de logs. O framework provê ferramentas para que essa tarefa fique mais facil.

Sempre que um log for escrito pense em colocar dados que possam identificar a transação com por ecemplo o CPF, terminal.

Logue todas as entradas, saidas e operçaões importantes.

EX.:

this.log.debug(`Iniciando a atualização do usuário [${cpf}]`, dadosParaAtualizar);
this.log.debug(`Dados atualizados com sucesso para o usuário [${cpf}]`, dadosAtualizados);

## Massa de teste

O digital tem seu proprio sistema de geração de massas de teste. Caso você precise de uma massa em homologação que exista em produção, 
basta utilizar o sistema de massas para cadastrar ou localizar o cenário necessário para a execução dos testes.

A senha padrão gerada para os usuários desse sistema é abc123. Caso o CPF não funciona, adicione @oi.net no final e tente novamente.

## Auditoria

A Oi possui seu peoprio sistema de auditoria. Caso precise utilizar, entre em contato com a equipe responsável pela Minha Oi e informe suas necessidades.

Depois de mapeadas as funcionalidades auditaveis, você poderã utilizar o modulo de auditoria já incluido no seu projeto através do framework.

## Tagueamento e Data Layer

Nenhum projeto devrá subir para produção sem tagueamento e DataLayer. Esse processo é necessério para que a equipe de negócio possa receber números sobre o sistema.

Para iniciar o processo de tagueamento você precisará procurar a equipe de tagueamento para que eles possam fazer uma analise e passar os passos necessários para que o mapeamento seja realizado.

## Rollout

Verifique se seu sistema precisa de uma estratégia de rollout antes do lançamento completo.

Existem casos onde um sistema só pode ser lançado para colaboradores, determinadas ufs, teste A/B, ou perfis de cliente. Procure saber em qual situação seu projeto se encaixa.

## Butler

O Butler é uma ferramenta criada pelo digital que é capaz de analisar padrões na nase de logs do Elastic Search, e caso sejam atingidos envia e-mails ou sms comunicando sua ocorrência.

Para criar um novo alerta, procure o gestor da equipe de desenvolvimento para que ele possa passar as orientações.

Basicamente, você precisaŕa informar a query do elastic search que você precisa monitorar, o numero de ocorrencias necessárias para disparar a ação e o e-mail das pessoas que deverão ser comunicadas caso o padrão ocorra.

## Envio de e-mail

Caso a sua aplicação precise enviar e-mails, você deverá utilizar o SENDGRID através da API Digital Notification.

Se informe com a equipe de API Digital para obter endpoints e credenciais, além de instruções para a criação do template de e-mail na ferramente SENDGRID.

## Envio de Tokens

O Digitarl possui sua propria ferramenta de envio de tokens, o Oi Token.

O OiToken é capaz de gerar e enviar tokens por SMS, VOZ ou Conversor de TV.

Para utilizar o Oi Token procure o gestor de área de desenvolvimento digital e informe sua volumetria.

## Teste de performance

Antes de liberar um projeto é necessário realizar testes de performance em suas APIs.

Você pode utilizar diversas ferramentas para essa tarefa. As ferramentas recomendadas são o JMeter e o Apache Benchmark.

## Fila

