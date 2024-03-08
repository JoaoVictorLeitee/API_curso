const verifyToken = async (request, response, next) => {

    if (!request.headers.authorization){
        return response.status(401).json("Token not Found");
    }

return next();
};

module.exports = verifyToken;