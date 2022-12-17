exports.ExampleMiddleware = function(req,res,next){
    req.msg = "Hello From Middleware";
    next();
}