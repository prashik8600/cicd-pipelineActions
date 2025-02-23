const express = require('express')

const app = express()



app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "hello world changing Updating the Main"
    })
})

app.listen(8080, () => {
    console.log('server running on port 8080')
})
