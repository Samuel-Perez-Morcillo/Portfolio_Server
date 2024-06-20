const router = require("express").Router()
const StudyCenters = require("../models/StudyCenter.model")

router.post("/", (req, res, next) => {
    const { name, formation, description, imageUrl, location } = req.body

    StudyCenters
        .create({ name, formation, description, imageUrl, location })
        .then(newStudyCenter => res.status(201).json(newStudyCenter))
        .catch(err => next(err))
})

router.get("/", (req, res, next) => {

    StudyCenters
        .find()
        .then(allStudyCenter => res.status(201).json(allStudyCenter))
        .catch(err => next(err))
})

module.exports = router