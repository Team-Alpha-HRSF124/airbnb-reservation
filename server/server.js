const express = require('express')
const app = express()
const port = 3001
var bodyParser = require('body-parser')

// app.get('/', (req, res) => res.send('Hello World!'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/', express.static(path.join(__dirname, '../dist/')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
