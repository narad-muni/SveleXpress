exports.PostController = function(req,res){
    res.json({
        "Controller":"Hello",
        "Middleware":req.msg
    })
}