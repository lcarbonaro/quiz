const fs = require('fs')
fs.writeFileSync('./.env', `testEnvVar=${process.env.TEST}\n`)