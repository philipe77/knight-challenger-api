import * as mongoose from 'mongoose'


// Atributos do guerreiro
export interface Atrributes extends mongoose.Document {
    strength: number,
    dexterity: number,
    constitution: number,
    intelligence: number,
    wisdom: number,
    charisma: number
}

const AtrributesSchema = new mongoose.Schema({
    strength: {
        type: Number,

    },
    dexterity: {
        type: Number
    },
    constitution: {
        type: Number
    },
    intelligence: {
        type: Number
    },
    wisdom: {
        type: Number
    },
    charisma: {
        type: Number
    }
})
// fim atributos do guerreiro

// Inicio criação do Armas
export interface Weapons extends mongoose.Document {
    name: string,
    mod: number,
    attr: string,
    equipped: boolean
}

const WeaponSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    mod: {
        type: Number
    },
    attr: {
        type: String
    },
    equipped: {
        type: Boolean
    }
})
// fim armas do guerreiro

//Inicio Guerreiro
export interface Knight extends mongoose.Document {
    name: string,
    nickname: string,
    birthday: Number,
    keyAttribute: string,
    kActive: boolean,
    weapons: Weapons[],
    attributes: Atrributes
}

const knightSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    birthday: {
        type: Number,
    },
    keyAttribute: {
        type: String,
        required: true
    },
    keyActive: {
        type: Boolean,
    },
    weapons: {
        type: [WeaponSchema],
        required: false,
        select: true
    },
    attributes: {
        type: AtrributesSchema,
        required: false,
        select: true
    }

})

export const Knight = mongoose.model<Knight>('Knight', knightSchema)
