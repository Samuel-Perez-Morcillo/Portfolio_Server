const { Schema, model } = require("mongoose")

const languagesSchema = new Schema({

    language: {
        type: String
    },

    imageUrl: {
        type: String
    },

    description: {
        type: String
    }


}, {
    timestamps: true
})

const Languages = model("Languages", languagesSchema)
module.exports = Languages