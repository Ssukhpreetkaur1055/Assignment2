const about = function(req,res){
    res.render('about',{title:'About my Movie site'});
};

module.exports = {
    about
};