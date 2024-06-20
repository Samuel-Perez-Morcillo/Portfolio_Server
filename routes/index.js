module.exports = app => {

  const LanguageRouter = require('./languages.routes')
  app.use('/api/languages', LanguageRouter)

  const StudyCenterRouter = require('./studyCenters.routes')
  app.use('/api/studyCenters', StudyCenterRouter)


}