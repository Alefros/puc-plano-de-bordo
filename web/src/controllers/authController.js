module.exports.authenticate = (app) => function(req, res, next) { 
    const token = req.get('Authorization');
    if (token === null) {
        console.log('Acesso negado. Token não informado');
        res.status(401);
        res.send({
            statusCode: 401,
            message: 'Access Denied'
        });
    }
};

module.exports.hasPermission = (app, permission) => function(req, res, next) {
    
};