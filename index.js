const express = require('express')
const taskRouter = require('./routes/tasks')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    const startedAt = new Date

    res.on('finish', () => {
        console.log('${startedAt.toISOString()} - ${req.method} ${r')
    })
    
    next()

})

app.get("/", (req, res)=> {
    res.json({message: "Hello World"})
})

app.use('/api/tasks', taskRouter)

module.exports = app