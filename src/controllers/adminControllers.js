
const adminControllers = {
    adminhome:(req,res)=>res.send('Route for Admin view') ,
    adminCreate:(req,res)=>res.send('Route for find and retrieve a product by ID') ,
    adminCreateAdd:(req,res)=>res.send('Route for add the current item to the web catalog') ,
    adminEdit:(req,res)=>res.send('Route for edit a product by ID'),
    adminEditAdd:(req,res)=>res.send('Route for send the edit a product by ID information'),
    adminDelete: (req,res)=>res.send('Route for delete a product by ID') 
}

module.exports = adminControllers;
