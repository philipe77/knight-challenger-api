import * as restify from 'restify'

const mpContentType = 'application/merge-patch+json'

export const mergePatchBodyParser =(req,resp,next)=>{
    
    if(req.getContentType() === mpContentType && req.method === 'PATCH'){
        (<any>req).rawBody = req.body;
        try{
            req.body = JSON.parse(req.body);
        }catch(e){
            return next(new Error (`Invali Content ${e.message}`))
        }
        
    }

    return next()
}