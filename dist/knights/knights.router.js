"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../common/model-router");
const knights_model_1 = require("./knights.model");
class KnightsRouter extends model_router_1.ModelRouter {
    constructor() {
        super(knights_model_1.Knight);
        //Acha as armas do guerreiro
        this.findWeapon = (req, resp, next) => {
            knights_model_1.Knight.findById(req.params.id, "+weapons")
                .then(knight => {
                if (!knight) {
                    next(new Error(`Not found Content`));
                }
                else {
                    resp.json(knight.weapons);
                    return next();
                }
            }).catch(next);
        };
        //Cria ou altera as armas do guerreiro
        this.replaceWeapon = (req, resp, next) => {
            knights_model_1.Knight.findById(req.params.id).then(knight => {
                if (!knight) {
                    next(new Error(`Not found Content`));
                }
                else {
                    knight.weapons = req.body; //ARRAY de Weapon
                    return knight.save();
                }
            }).then(k => {
                resp.json(k.weapons);
                return next();
            }).catch(next);
        };
        //acha o atributo do guerreiro
        this.findAttribute = (req, resp, next) => {
            knights_model_1.Knight.findById(req.params.id, "+attributes")
                .then(knight => {
                if (!knight) {
                    next(new Error(`Not found Content`));
                }
                else {
                    resp.json(knight.attributes);
                    return next();
                }
            }).catch(next);
        };
        //retorna ou cria o atributo do guerreiro 
        this.replaceAttribute = (req, resp, next) => {
            knights_model_1.Knight.findById(req.params.id).then(knight => {
                if (!knight) {
                    next(new Error(`Not found Content`));
                }
                else {
                    knight.attributes = req.body;
                    return knight.save();
                }
            }).then(k => {
                resp.json(k.attributes);
                return next();
            }).catch(next);
        };
    }
    applyRoutes(application) {
        application.get('/knights', this.findAll);
        application.get('/knights/:id', [this.validateId, this.findById]);
        application.post('/knights', this.save);
        application.put('/knights/:id', [this.validateId, this.replace]);
        application.patch('/knights/:id', [this.validateId, this.update]);
        //weapon
        application.get('/knights/:id/weapon', [this.validateId, this.findWeapon]);
        application.put('/knights/:id/weapon', [this.validateId, this.replaceWeapon]);
        //Attributes
        application.get('/knights/:id/attributes', [this.validateId, this.findAttribute]);
        application.put('/knights/:id/attributes', [this.validateId, this.replaceAttribute]);
    }
}
exports.knightsRouter = new KnightsRouter();
