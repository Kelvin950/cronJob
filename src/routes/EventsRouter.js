const eventController =  require("../controller./eventController" ) ; 
const Router=  require("express").Router()  ;



Router.route("/api/events")
.post(eventController.createEvent) 
.get(eventController.getEvents) 
.delete(eventController.deleteAll)

Router.route("/api/events/:id")
.get(eventController.getEvent) ; 



module.exports =  Router ; 