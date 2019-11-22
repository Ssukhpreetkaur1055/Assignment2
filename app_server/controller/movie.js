const homelist = function(req, res){
    res.render('index',{title:'Welcome'});
};

const listDisplay = function(req,res){
    res.render('list-display',{movie:movieArray});
};

var movieArray = [
                 {
                   title:"Maleficient", 
                   year:"2019"
                   
                    
                 },
                 {
                title:"Avengers",
                year:"2018",
               
                },
                 {
                title:"Fast and Furious",
                year:"2019",
               
                }   
];


module.exports = {
  homelist,
  listDisplay
};