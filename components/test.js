module.exports = {
    apply : function(app){
        app.get('/test',(req,res)=>{
            res.send('<h1>test</h1>');
        });
    }
}