const express = require('express');

const app = express();

//Middlewares
//- functions that execute when routes are being hit
app.use('/posts', () => {
    console.log('hello, this is a middleware running');
});


//ROUTES
//get - get info
//post -  eg submit a form (give info)
//delete - 
//patch - 
//first parameter = route
app.get('/', (req, res) => {
    res.send('We are on homepage')
});

app.get('/posts', (req, res) => {
    res.send('We are on posts')
});

//How do we start listening to the server?
app.listen(3000);