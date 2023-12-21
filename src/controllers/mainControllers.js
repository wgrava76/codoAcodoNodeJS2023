
const mainControllers = {
    home:(req,res)=>res.render('home') ,
    contact:(req,res)=>res.send('Route for Contact view') ,
    about:(req,res)=>res.send('Route for About view') ,
    faqs:(req,res)=>res.send('Route for Faqs view') 
}

module.exports = mainControllers;
