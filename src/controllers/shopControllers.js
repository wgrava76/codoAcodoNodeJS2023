
const shopControllers = {
    shopHome:(req,res)=>res.render('shop') ,
    shopItemID:(req,res)=>res.send('Route for find and retrieve a product by ID') ,
    shopItemAdd:(req,res)=>res.send('Route for add the current item to the shop cart') ,
    cart:(req,res)=>res.send('Route for Cart view'),
    cartAdd: (req,res)=>res.send('Route for go to checkout page') 
}

module.exports = shopControllers;

