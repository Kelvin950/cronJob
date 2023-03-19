const userController =  require("../controller./userController") ; 
const Router =  require("express").Router() ;



Router.route("/api/user/create") 
.post(userController.createUser) ; 





module.exports = Router ;