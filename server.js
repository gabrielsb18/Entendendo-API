const express = require("express"); //importamos o modulo Express
//O express é um framework pra Node.js que simplifoca a criação de servidores Web.

const app = express(); //Chamamos a função express para criar uma instacia dd aplicativo Express. ELa é usada para configurar o servidor.

const data = require("./data.json")

app.use(express.json());

//Uma boa pratica é não utlizar uma "/" no final do nosso EndPoint
// Outra boa pratica é nunca deixar os clientes sem resposta
app.get("/clients", function(req, res){
    res.json(data)
})
//Os pedidos do Garçom(API) são anotados em um json.

//htttp:/jsonplaceholder.typicode.com/users
//URL utilizada para buscar nosso dados base como teste

app.get("/clients/:id", function(req, res){
    const {id} = req.params //buscamos nosso ID
    const client = data.find(cli => cli.id == id);

    if (!client) return res.status(204).json();
    res.json(client);
});

app.post("/clients", function(req, res){
    const {name,email} = req.body;

    //salvar

    res.json({name, email})
});


app.put("/clients/:id", function(req, res){
    const {id} = req.params //buscamos nosso ID
    const client = data.find(cli => cli.id == id);

    if (!client) return res.status(204).json(); //Não encontra cliente

    const {name} = req.body;
    client.name =name;

    res.json(client)
});

app.delete("/clients/:id", function(req, res){
    const {id} = req.params;
    const clientsFiltered = data.filter(client => client.id != id)

    res.json(clientsFiltered);
});

//RESPONSE = Resposta ou pedido que o Garçom(API) trouxe pra gente através de um REQUEST
//REQUEST = Pedido ou requisição feito para o Garçom(API) que irá trazer nossa RESPONSE

// a função app.listen() é usada para iniciar o servidor e expecificar a poeta a ser utilizada
app.listen(3000, function() {   //definimos a porta o qual nosso servidor ficará hospedado
    console.log("Servidor funcionando!");
});

/*Verbos Http:
    GET = Recebe dados de um Resource
    POST = Envia dados ou informações para serem processados por um Resource
    PUT = Atualiza dados de um Resource
    DELETE = Deleta um Resource 
*/

//http://localhost:3000/clients
//Não podemos dizer que a URI completa é um resource
//podemos dizer que client é o nome do nosso resource