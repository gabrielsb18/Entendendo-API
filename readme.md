* Este Repositorio foi criado como objeto de estudo, sendo o primeiro contato com uma API em Node.js, entendo a sintaxe e alguns conceitos fundamentais para a construção de uma API.
---
# API

API - Aplication Progaming Interface (Interface de Progamação de Aplicações), é basicamente um conjunto de rotinas e padrões estabelecidos por uma aplicação, para que outras aplicações possam utilizar as funcionalidades desta aplicação.

- Responsável por estabelecer comunicações entre diferentes serviços
- Meio de campo entre as tecnologias
- Intermediador para troca de informações


# Analogia da API

* Cliente - (Client, navegador)
* Garçom - (API, vai levar os pedidos para a cozinha)
* Cozinha - (Server)

---
# REST


Rest - Representational State Transfer (Transferência de Estado Representativo)

* A transferência de dados, é geralmente feita usando o protocolo HTTP.
* Ela determina obrigações na transferência de dados

---
# Analogia Rest

Limpinho
Que atenda bem
Que Te da aquilo que você pediu

Cliente
Não pode gritar
Não pode xingar

O bloquinho de notas do garçom é o http

---

* Dados no Rest são chamados de resources, seria então uma entidade, um objeto
*  Existem 6 constrains ou "obrigações" onde comprimos para nos tornar "RESTFULL"

---
# RESTFULL

RESTFULL é a aplicação dos padrões REST

---
# Constrains (6 necessidades)

Cliente-Server: Separação  do cliente e do armazenamento de dados (servidor), dessa forma, poderemos ter uma portabilidade do nosso sistema, usando o React para a Web e React Native para o SmartPhone, por exemplo.

Stateless: Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor entender e responder (RESPONSE) a requisição (REQUEST). Exemplo: A sessão do usuário deverá ser enviada em todas as requisições, para saber se aquele usuário está autenticado e apto a usar os serviços, e o servidor não pode lembrar que o cliente foi autenticado
na requisição anterior. No nossos cursos, temos por padrão usar Toekens para as comunicações.

Cacheable: As repostas para uma requisição, deverão ser explicitas ao dizer se aquela requisição, pode ou não ser cacheada pelo cliente.

layered System: O cliente acessa a um endpoint, sem precisar saber da complexidade, de quais passos estão sendo necessários para o servidor responder a requisição, ou quais outras camadas o servidor estará lidando, para que a requisição seja respondida.

CodeOnDemand (optional): Dá a possibilidade da nossa aplicação pegar códigos, como o javaScript, por exemplo, e executar no Cliente.


*Endpoint* = pedaço da URL

---
# Boas Práticas

- Utilizar verbos HTTP para nossas requisições
- Utilizar plural ou singular na criação dos endpoints? *NÃO IMPORTA!* use um padrão!
- Não deixar a barra no final do endpoint
- Nunca deixe o cliente sem resposta

---
# Verbos HTTP

- Get = Recebe dados de um  resource
- Post = Envia dados ou informações para serem processado por um resource
- Put =Atualiza dados de um resource
- Delete = Deleta um resource

---
# Status das respostas

- 1xx: Informaçã
- 2xx: Sucesso
	- 200: Ok
	- 201: Created
	- 204: Não tem conteúdo PUT POST DELETE

- 3xx: Redirection

- 4xx: Client Error
	- 400: Bad Request
	- 401: Not Found

- 5xx: Server Error
	- 500: Internal Server Erro

---
Reference: 
    https://youtube.com/watch?v=ghTrp1x_1As