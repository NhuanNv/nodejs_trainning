const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))

app.get('/', (req, res) => {
    const a = 1
    const b = 2
    const c = a + b
    console.log("Value of C is " + c)

    res.send('Calling Hello')
})


app.listen(port, () => console.log(`Example calling in http://localhost:${port}`))
