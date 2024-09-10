const successObject = {
    'GET': { statusCode: 200, message: 'Operation successful' },
    'POST': { statusCode: 201, message: 'Created successfully' },
    'PUT': { statusCode: 202, message: 'Updated successfully' },
    'DELETE': { statusCode: 204, message: 'Deleted successfully' },
};
   
  const errorObject = {
    'ValidationError': { statusCode: 400, message: 'Validation failed' },
    'UnauthorizedError': { statusCode: 401, message: 'Unauthorized access' },
    'NotFoundError': { statusCode: 404, message: 'Resource not found' },
    'NotFoundException': { statusCode: 404, message: 'Resource not found' },
    'InternalServerError': { statusCode: 500, message: 'An internal error occurred' },
  };
   
  function handleRequest(controllerFunction) {
    return async (req, res) => {
        try {
            
            const result = await controllerFunction(req, res);
   
           
            const method = req.method;
            const success = successObject[method] ;
            res.status(success.statusCode).send({
                message: success.message,
                data: result,
            });

            
        } catch (error) {
            console.error('Error:', error);
   
            
            const errorInfo = errorObject[error.name] || errorObject['InternalServerError'];
            res.status(errorInfo.statusCode).send({
                error: error.name,
                message: error.message || errorInfo.message,
            });
        }
    };
  }
   
  module.exports = handleRequest;