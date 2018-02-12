module.exports = {
  port: process.env.PORT || 8081,
  db: {
    name: process.env.DB_NAME || 'bookmarker',
    user: process.env.DB_USER || 'bookmarker',
    password: process.env.DB_PASS || 'bookmarker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './bookmarker.sqlite'
    }
  }
}
