"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
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
});
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
});
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
});
exports.Knight = mongoose.model('Knight', knightSchema);
