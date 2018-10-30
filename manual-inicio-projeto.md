# Manual para inicio de projetos

Esse manual visa prover informações basicas sobre os processos necessários para a criação de um novo projeto.

Utilize como referência e complemente caso alguma nova informação seja necessária.

## Índice

- [Frameworks e boilerplates para criação de aplicações](#frameworks-e-boilerplates-para-criação-de-aplicações)
- [Solicitação de maquinas](#solicitação-de-maquinas)
- [Firewall](#firewall)
- [Criação de FileSystem](#criação-de-filesystem)
- [Criação de Pipeline](#criação-de-pipeline)
- [Criação de banco de dados](#criação-de-banco-de-dados)
- [Cache e Redis](#cache-e-redis)
- [Configuração do Sonar](#configuração-do-sonar)
- [Load Balancer e DNS](#load-balancer-e-dns)
- [Proxy reverso](#proxy-reverso)
- [Documentos e Desenhos](#documentos-e-esenhos)
- [Manual de operação - MOP](#manual-de-operação-mop)
- [Teste de Segurança](#teste-de-egurança)
- [Teste de performance](#teste-de-performance)
- [Logs e Kibana](#logs-e-kibana)
- [Massa de teste](#massa-de-teste)
- [Auditoria](#auditoria)
- [Tagueamento e Data Layer](#tagueamento-e-data-layer)
- [Rollout](#rollout)
- [Butler](#butler)
- [Envio de e-mail](#envio-de-e-mail)
- [Envio de Tokens](#envio-de-tokens)
- [Fila](#fila)

## Frameworks e boilerplates para criação de aplicações

Todas as aplicações criadas pela equipe de desenvolvimento digital devem utilizar os frameworks mantidos pelo digital.

A utilização dos frameworks, além de padronizar os projetos, visa ajudar com tarefas comumuns como logs, cache, auditoria, componentização etc.

Além dos frameworks, temos os bootstraps/boilerplates de aplicações frontend e backend. Todos os projetos devem ser iniciados através de 
um desses boilerplates.

- oi-node-api-bootstrap => Esse é o boilerplate oficial para criação de aplicações nodeJs. Por padrão importa e utiliza o oi-node-api-framework.

- oi-node-api-bootstrap-minhaoi => Esse é o boilerplate oficial para criação de aplicações nodeJs do universo para a Minha Oi 3.0. Por padrão importa e utiliza o oi-node-api-framework e o minhaoi-node-framework. 

- XYZ frontend => Esse é o boilerplate para criação de projetos frontend. Por padrão utiliza o COI.

- XYZ frontend minha oi  => Esse é o boilerplate para criação de projetos frontend para a Minha Oi 3.0. Por padrão utiliza o COI e o MOIC.

Breve explicação do que cada framework faz:

- oi-node-api-framework  => Utilizado no backend, é um pacote NPM com soluçẽs de log, cache, auditoria, database etc.

- minhaoi-node-framework => Utilizado no backend, é um pacote NPM com soluçẽs para a minha oi, como acesso a serviço comuns, tratamento de segurança de sessão etc.

- COI (Componentes Oi) => Utilizado no frontend, é um pacote NPM com componentes genéricos da Oi como listas, botões, modais.

- MOIC (Minha Oi Componentes) => Utilizado no frontend, é um pacote NPM com componentes específicos da Minha Oi que se repetem em mais de uma aplicação, como sidebar por exemplo. Os componentes dessa biblioteca, sabem fazer acesso aos serviços necessários para que eles funcionem.

## Solicitação de maquinas

Toda squad deve ter um pool de maquinas para hospedar seus projetos. Essas maquinas servirão para prover serviços de backend e frontend de homologação e produção.

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

Toda aplicação no ambiente de homologação (staging) e produção, necessitará de um filesystem proprio. O filesystem é o local onde os dados da aplicação ficarão armazenados.

Cada aplicação deve ter seu próprio filesystem pois dessa forma temos independencia entre os diversos projetos fazendo com que a falta de espaço em um projeto não impacte a aplicação vizinha.

Os filesystems de uma máquina podem ser listados através do comando *df -kh*, antes de solicitar a criação verifique se já não existe outro com o mesmo nome.

Para solicitar a criação do filesystem você deverá procurar a equipe de DEVOPS e abrir uma ARS para:

- Categoria: INFRA ESTRUTURA
- Tipo: UNIX
- Item: FILE SYSTEM
- Sub Item: INTRANET
- Complemento: NÃO SE APLICA

com a seguinte descrição:

```
Solicito a criação de filesystem com 20 GB nas maquinas A, B, C e D para o projeto Y. O nome do filesystem deverá ser /nome-do-projeto e deverá ser configurado com o usuário DVOPSUSR grupo DVOPSGRP e permissão 2775.
```

## Criação de Pipeline

Para que uma aplicação seja entregue nos diversos ambientes (DEVELOPMENT, TESTING, STAGING e PRODUCTION), ela deverá passar por um pipeline no jenkins (http://dadhx02.interno/). Cada aplicação deverá ter seu próprio pipeline.

Para criar um pipeline, você deve procurar a equipe de DEVOPS para que ela sugira a melhor forma de fazer isso de acordo com o seu projeto.

## Load Balancer e DNS

Como num ambiente de alta disponibilidade utilizamos sempre mais de uma maquina, é necessário criar um load balancer que será responsável por distribuir a carga entre elas.

Para criar um load balancer para sua aplicação você terá que abrir 2 ARSs, uma para criação do load balancer e outra para associar o IP a um DNS.

Para criar o load balancer, será necessário abrir uma ARS para:

- Categoria: INFRA ESTRUTURA
- Tipo: REDE CORPORATIVA
- Item: BALANCEADOR DE CARGA
- Sub Item: CONFIGURACAO
- Complemento: DC DF (Datacenter onde está sua aplicação)

Com a descrição:

```
Solicito a criação de um load balancer para as maquinas A, B, C e D na porta 9999
```

Após receber o IP do novo load balancer, você precisará criar uma ARS para a criação do DNS:

- Categoria: INFRA ESTRUTURA
- Tipo: REDE CORPORATIVA
- Item: DNS
- Sub Item: CONFIGURACAO
- Complemento: INCLUSAO DOMINIO

Com a descrição:

```
Solicito a criação do DNS http://api-meuprojeto.interno que aponte para o IP 111.111.111.111
```

## Proxy reverso

O endereço do load balancer da sua aplicação backend é interno, só funciona dentro da rede da Oi. Para que esse endereço possa ser acessado de fora da rede da Oi ( internet ) é necessário que eles sejam mapeados e expostos. Para isso você precisará criar o mapeamento de proxy reverso.

Esse mapeamento faz um de/para de um endereço interno para um endereço externo, como por exemplo:

http://meuprojeto.interno:9999/demandas   >   /api/demandas

Para criar um proxy reverso no apache, você precisará abrir uma ARS para a categoria:

- Categoria: INFRA ESTRUTURA
- Tipo: SUPORTE INFRAWEB
- Item: SERVICO
- Sub Item: CONFIGURACAO

Com a seguinte descrição:

```
Solicito a inclusão da configuração de proxy reverso ( maquinas do frontend) com as seguintes definições:

ProxyPass /meu/endereco/externo/demandas http://http://meuprojeto.interno:9999/demandas
ProxyPass /meu/endereco/externo/login http://http://meuprojeto.interno:9999/login
```



## Criação de banco de dados

O digital possui uma estrutura oficial de banco de dados MongoDb. Para criar um novo banco ou solicitar um novo usuário você deverá procurar a equipe XYZ.

Para criar um banco de dados ORACLE você precisará abrir uma ARS para a categoria XYX com a seguinte descrição:

```
Solicito a criação de um banco de dados Oracle para a aplicação XYZ com suas devidas credenciais de acesso.
```

## Cache e REDIS

Devido a quantidade de acesso que nossos sistemas possuem é extremamente importante que sua aplicação utilize cache.

Nosso framework de backend (oi-node-api-framework) possui um módulo para tratar essa questão utilizando o REDIS.

Para utilizar a estrutura de REDIS da Minha Oi, você precisará entrar contado com os responsáveis pelo projeto para receber o endereço e a credencial.

Caso você precise de uma estrutura própria de REDIS, será necessãrio criar uma ARS para a categoria XYZ com a seguinte descrição:

```
Solicito a criação de uma estrutura de alta disponibilidade de REDIS para o projeto XYZ.
```

## Configuração do Sonar

Todos sabemos a importancia dos testes automatizados, por isso as aplicações digitais devem ter sua cobertura de testes monitorada pelo Sonar.

Para configurar sua aplicação você deverá procurar a equipe de DEVOPS e solicitar apoio para a criação e configuração na estrutura do Sonar.

## Documentos e Desenhos

É importante que todos os projetos tenham os seguintes tipos de documentos e desenhos:

- Arquivo com o desenho contendo todas as maquinas, com seus IPS e endereços DNS. LINK_DE_EXEMPLO
- Arquivo com o relacionamento entre a aplicação e suas integrações. LINK_DE_EXEMPLO
- Arquivo com a configuração do proxy reverso. LINK_DE_EXEMPLO
- Arquivo com as APIs e seus consumidores. LINK_DE_EXEMPLO

## Manual de operação MOP

Todas as aplicações devem ter um MOP, esse é o documento utilizado pela equipe de operações para entender e encontrar possiveis problemas em um projeto.

Esse documento contem informações de capacidade da máquina, IPS, endereços, descrição funcional do objetivo da aplicação, desenhos da infra estrutura, integrações com requests e responses, localização dos logs, informações sobre restarts, expurgos e exemplos de uso. Tudo que pode vir a ser necessário no processo de suporte e contingencia de um problema.

O MOP deve ser criado e compartilhado com a equipe de operações da empresa. Nenhuma aplicação pode subir para produção sem passar pelo processo de criação do MOP.

EXEMPLO_DE_MOP

## Teste de performance

Antes de liberar um projeto é necessário realizar testes de performance em suas APIs.

Você pode utilizar diversas ferramentas para essa tarefa. As ferramentas recomendadas são o JMeter e o Apache Benchmark.

## Teste de Segurança

Todas os projetos e funcionalidades novos devem ser analisados e liberados pela equipe de segurança.

Procure o responsável pela equipe de segurança para descrever seu projeto e agendar uma avaliação.

## Logs e Kibana

O digital tem sua propria estrutura de Kibana em http://XYZ.

Para colocar sua aplicação nessa estrutura, será necessário comunicar a equipe XYZ para que a analise de espaço em disco seja realizada.

Toda aplicação precisa de dashboards e visualizações que consigam representar o momento da aplicação em relação a metas de negocio e em relação aos erros ocorridos.

Para que você consiga ter um bom dashboard e uma boa capacidade de rastreamento de erros, é necessário que a aplicação tenha uma boa cobertuda de logs. 

O framework provê ferramentas para que essa tarefa fique mais facil. Sempre que um log for escrito pense em colocar dados que possam identificar a transação com por exemplo o CPF, terminal.

Logue todas as entradas, saidas e operçaões importantes.

EX.:

this.log.debug(`Iniciando a atualização do usuário [${cpf}]`, dadosParaAtualizar);
this.log.debug(`Dados atualizados com sucesso para o usuário [${cpf}]`, dadosAtualizados);

## Massa de teste

O digital tem seu proprio sistema de geração de massas de teste. Caso você precise de uma massa em homologação que exista em produção, basta utilizar o sistema de massas para cadastrar ou localizar o cenário necessário para a execução dos testes.

A senha padrão gerada para os usuários desse sistema é abc123. Caso você tente autenticar em homologação com a massa selecionada e a senha não esteja funcionando, adicione "@oi.net" no final do cpf (10696634768@oi.net.br) e tente novamente.

## Auditoria

É importante que você verifique se a sua funcionalida de é passivel de auditoria. De antemão, podemos afirmar que a maioria das funcionalidades da Minha Oi, ou que gerem OS e protocolos é.

A Oi possui seu próprio sistema de auditoria. Caso precise utilizar, entre em contato com a equipe responsável pela Minha Oi e informe suas necessidades, isso dará inicio ao processo de mapeamento.

Depois de mapeadas as funcionalidades auditaveis, você poderã utilizar o modulo de auditoria já incluido no seu projeto através do framework para gravar os logs.

## Tagueamento e Data Layer

Nenhum projeto devrá subir para produção sem Tagueamento e Data Layer. Esse processo é necessário para que a equipe de negócio possa receber números sobre o sistema.

Para iniciar o processo de tagueamento você precisará procurar a equipe de analytics para que eles possam fazer um levantamento e passar os passos necessários para que o trabalho seja realizado.

Ao final desse processo você poderá esperar que os dados da sua aplicação estejam disponíveis para sua equipe através de relatórios do Google e no Tableau.

## Rollout

Verifique se seu sistema precisa de uma estratégia de rollout antes do lançamento completo.

Existem casos onde um sistema só pode ser lançado para colaboradores, determinadas ufs, perfis de cliente ou precisa de um teste A/B. 

Procure saber em qual situação seu projeto se encaixa antes e durante a criação da sua aplicação.

## Butler

O Butler é uma ferramenta criada pelo digital que é capaz de analisar padrões na base de logs do Elastic Search e caso sejam atingidos, envia e-mails ou sms comunicando sua ocorrência.

Para criar um novo alerta, procure o gestor da equipe de desenvolvimento para que ele possa passar as orientações para a criação de uma nova receita.

Basicamente, você precisaŕa informar a query do elastic search que você precisa monitorar, o numero de ocorrencias necessárias para disparar a ação e o e-mail das pessoas que deverão ser comunicadas caso o padrão ocorra.

## Envio de e-mail

Caso a sua aplicação precise enviar e-mails, você deverá utilizar o SendGrid através da API Digital - Notification.

Se informe com a equipe de API Digital para obter endpoints e credenciais, além de instruções para a criação do template de e-mail na ferramenta do SendGrid.

## Envio de Tokens

O Digital possui sua propria ferramenta de envio de tokens (OiToken) que é capaz de gerar e enviar tokens por SMS, VOZ ou Conversor de TV.

Para utilizar o OiToken procure o gestor da equipe de desenvolvimento digital e informe sua necessidade e volumetria.

## Fila

