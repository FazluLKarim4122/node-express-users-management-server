const express = require ('express')
const app = express()
const port = process.env.PORT || 4000

const users = [
    {
        id: 1,
        name: 'Joey',
        email: 'joey@gmail.com'
    },
    {
        id: 2,
        name: 'kendra',
        email: 'kendra@gmail.com'
    },
    {
        id: 3,
        name: 'alison',
        email: 'alison@gmail.com'
    },
]

app.get('/', (req, res) =>{
    res.send('users management server is running')
})

app.get('/users', (req, res) =>{
    res.send(users)
})

app.listen(port, ()=>{
    console.log(`server is running on PORT: ${port}`);
})