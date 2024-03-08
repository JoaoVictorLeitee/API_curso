let users = [];

function createUser(request, response){
    const {name, age} = request.body;

    const newUser = {
        id: users.length ? users[users.length - 1].id +1 : 1,
        name,
        age
    };
    users.push(newUser);

    return response.status(201).json(newUser);    
}

function listUsers(request, response){
    return response.status(200).json(users);

}

function listUserDetail(request, response){
    console.log(request.params.id);

    const currentUser = users.find((user) => user.id === parseInt(request.params.id)); 

    if(!currentUser) return response.status(404).json("Não foi encontrado nenhum usuário");


    return response.status(200).json(currentUser);
}

function deleteUser(request, response){
    const index = users.findIndex(
        (user) => user.id === parseInt(request.params.id)); 

    if(index === -1) return response.status(404).json("Não foi encontrado nenhum usuário");

   users.splice(index);
    return response.status(200).json("Usuário excluído com sucesso");
}

function updateUser(request, response){
    const {name, age} = request.body;
    const index = users.findIndex(
        (user) => user.id === parseInt(request.params.id)); 

    if(index === -1) return response.status(404).json("Não foi encontrado nenhum usuário");

    const updateUser = {
        id: users[index].id,
        name,
        age,
    };

   users[index] = updateUser; 
   return response.status(200).json(updateUser);
};

module.exports = { createUser, listUsers, listUserDetail, deleteUser, updateUser };