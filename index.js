require('dotenv').config()
const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.get('/twitter',(req, res) => {
    res.send('Umar Waheed');
})

app.get('/login', (req, res)=>{
    res.send('<h1>please login at chai our code</h1>')
})

app.get('/Youtube', (req,res)=>{
    res.send('<h2> chai aur code</h2>');
})
app.listen(process.env.PORT, () => {
   console.log(`Example app listening on port ${port}`)
})
