const User  =  require("../models/user") ; 




exports.createUser =  async(req, res)=>{
 
     
    const  {name , email} =  req.body ; 


    const EmailAvailable = await findOne({email}) ; 
    
    if(!EmailAvailable){
    throw new Error("Email is not available"); 

    } 
     

    const user =  new  User({
        email , name  
    }) ; 

    await user.save() ; 


    res.send({
        user 
    })


}



