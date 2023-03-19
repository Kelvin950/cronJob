const express=  require("express") ;
const app =  express(); 
const expressAsyncErrors = require("express-async-errors") ;
const userRouter =  require("./routes/userRoutes") ; 
const eventRouter = require("./routes/EventsRouter");
const Events = require("./models/event");



app.use(express.json()) ; 
app.use(userRouter) ;
app.use(eventRouter);

 

app.use((err , req, res, next)=>{

 

    res.status(500).send({
        data:{
            error:err.message
        }
    })

})





module.exports =  app; 



