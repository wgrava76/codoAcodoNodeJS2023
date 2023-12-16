
const authControllers = {
    authHome:(req,res)=>res.send('Route for Auth login view') ,
    authLogin:(req,res)=>res.send('Route for Auth login send') ,
    authRegister:(req,res)=>res.send('Route for Auth Register view') ,
    authRegisterInfo:(req,res)=>res.send('Route for Auth Register info send'),
    authLogout: (req,res)=>res.send('Route for Auth Logout view') 
}

module.exports = authControllers;