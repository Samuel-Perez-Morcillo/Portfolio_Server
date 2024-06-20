const router = require("express").Router()
const StudyCenter = require("../models/StudyCenter.model")

router.post("/", (req, res, next) => {
    const { name, description, imageUrl, location } = req.body

    StudyCenter
        .create({ name, description, imageUrl, location })
        .then(newStudyCenter => res.status(201).json(newStudyCenter))
        .catch(err => next(err))
})

router.get("/", (req, res, next) => {

    StudyCenter
        .find()
        .then(allStudyCenter => res.status(201).json(allStudyCenter))
        .catch(err => next(err))
})

module.exports = router