const router = require("express").Router()
const Languages = require("../models/Languages.model")

router.post("/", (req, res, next) => {
    const { language, imageUrl, description } = req.body

    Languages
        .create({ language, imageUrl, description })
        .then(newLanguague => res.status(201).json(newLanguague))
        .catch(err => next(err))
})

router.get("/", (req, res, next) => {
    res.send("HOLAA")

    // Languages
    //     .find()
    //     .then(allLanguages => res.json(allLanguages))
    //     .catch(err => next(err))
})

module.exports = router