"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Router {
    render(response, next) {
        return (document) => {
            if (document) {
                response.json(document);
            }
            else {
                response.send(404);
            }
            return next();
        };
    }
    renderAll(response, next) {
        return (documents) => {
            if (documents) {
                /* documents.forEach(document=>{
                 
                }) */
                response.json(documents);
            }
            else {
                response.json([]);
            }
        };
    }
}
exports.Router = Router;
