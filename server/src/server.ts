import express from 'express';

const app = express();

app.use(express.json());

//Rota: Endereço completo da requisição
//Recurso: Qual entidade estamos acessando do sistema 

const users =[
    'Diego',
    'Cleiton',
    'Robson',
    'Daniel'
]

app.get('/users',(request,response)=>{

    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
    console.log('Listagem de usuários ');
    response.json(filteredUsers);
});

app.get('/users/:id',(request,response)=>{
    const id = Number(request.params.id);

    const user = users[id];
     
    response.json(user);
});

app.post('/users', (request,response) => {
    
    const data = request.body;

    const user = {

        name: data.name,
        email: data.email
    };
    
    return response.json(user);
});

app.listen(3333);