const { Router } = require("express");
const { createUser, listUsers, listUserDetail, deleteUser, updateUser } = require("./controllers/users");
const verifyToken = require("./middlewares/AuthMiddleware");
const routes = Router();

//cria rota para testar api
routes.get('/health', (request, response) => {
    return response.status(200).json("API Dísponivel seja bem vindo");
});

//cria array simulando banco


//cria rota get listar um usuario
routes.get('/users/:id', listUserDetail);

//cria rota get listar users
routes.get('/users', listUsers);

routes.use(verifyToken)

//cria rota post ara inserir novo usuario
routes.post('/users', createUser);

//deletar usuario
routes.delete('/users/:id', deleteUser);

routes.put('/users/:id', updateUser);

module.exports = routes;