const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
    const a = 1
    const b = 2
    const c = a + b
    console.log("Value of C is " + c)

    res.send('Calling Hello')
})


app.listen(port, () => console.log(`Example calling in http://localhost:${port}`))
