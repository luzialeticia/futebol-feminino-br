const app = require('./src/app')
const dotEnv = require('dotenv')

dotEnv.config()
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})