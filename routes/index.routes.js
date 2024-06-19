module.exports = app => {

  const LanguageRouter = require('./languages.routes')
  app.use('/api/languagues', LanguageRouter)
}