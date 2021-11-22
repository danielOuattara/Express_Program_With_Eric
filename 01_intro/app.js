
import express from 'express';
import Products from './product.js';


const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded ({extended: false}))

app.get('/', (req, res) => {
    res.send("Hello Express !");
})

app.get('/products', (req, res) => {
    res.json(Products)
})
app.get('/products/:id', (req, res) => {
    res.json(Products.find((item) => {
        return +req.params.id === item.id 
    }))
    // res.send(req.params)
})

app.post('/add', (req, res) => {
    console.log(req.body.id)
    res.sendStatus(200 )
});

// app.put()

// app.delete()




app.listen( port, () => {
    console.log(`Server Listening on port ${port}`)
})