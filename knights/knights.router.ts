import { ModelRouter } from '../common/model-router'
import * as restify from 'restify'
import { Knight } from './knights.model';


class KnightsRouter extends ModelRouter<Knight> {


    constructor() {
        super(Knight)
    }


    //Acha as armas do guerreiro
    findWeapon = (req, resp, next) => {
        Knight.findById(req.params.id, "+weapons")
            .then(knight => {
                if (!knight) {
                    next(new Error(`Not found Content`));
                } else {
                    resp.json(knight.weapons);
                    return next()
                }
            }).catch(next)
    }

    //Cria ou altera as armas do guerreiro
    replaceWeapon = (req, resp, next) => {
        Knight.findById(req.params.id).then(knight => {
            if (!knight) {
                next(new Error(`Not found Content`));
            } else {
                knight.weapons = req.body //ARRAY de Weapon
                return knight.save()
            }
        }).then(k => {
            resp.json(k.weapons)
            return next()
        }).catch(next)
    }

    //acha o atributo do guerreiro
    findAttribute = (req, resp, next) => {
        Knight.findById(req.params.id, "+attributes")
            .then(knight => {
                if (!knight) {
                    next(new Error(`Not found Content`));
                } else {
                    resp.json(knight.attributes);
                    return next()
                }
            }).catch(next)
    }

    //retorna ou cria o atributo do guerreiro 
    replaceAttribute = (req, resp, next) => {
        Knight.findById(req.params.id).then(knight => {
            if (!knight) {
                next(new Error(`Not found Content`));
            } else {
                knight.attributes = req.body
                return knight.save()
            }
        }).then(k => {
            resp.json(k.attributes)
            return next()
        }).catch(next)
    }

    applyRoutes(application: restify.Server) {


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

export const knightsRouter = new KnightsRouter();