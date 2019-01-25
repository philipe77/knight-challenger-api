import * as restify from 'restify'

export abstract class Router{

    abstract applyRoutes(application: restify.Server)

    render(response: restify.Response, next: restify.Next){
        return (document)=>{
          if(document){
            response.json(document)
          }else{
            response.send(404)
          }
          return next()
        }
      }

      renderAll(response: restify.Response, next: restify.Next){
        return (documents: any[])=>{
          if(documents){
            /* documents.forEach(document=>{
             
            }) */
            response.json(documents)
          }else{
            response.json([])
          }
        }
      }
}