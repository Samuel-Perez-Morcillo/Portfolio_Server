const { Schema, model } = require("mongoose")

const studyCenterSchema = new Schema({
    name: {
        type: String
    },

    formation: {
        type: String
    },

    description: {
        type: String
    },

    imageUrl: {
        type: String
    },

    location: {
        type: {
            type: String
        },
        coordinates: {
            type: [Number]
        }
    }

},
    {
        timestamps: true
    })

studyCenterSchema.index({ location: '2dsphere' })
const StudyCenter = model("StudyCenter", studyCenterSchema)
module.exports = StudyCenter