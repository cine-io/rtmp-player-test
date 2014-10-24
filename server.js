var connect = require('connect')
  , port = process.env.PORT || 9191;

console.log("listening at http://localhost:" + port)
connect().use(connect.static(__dirname)).listen(port)
