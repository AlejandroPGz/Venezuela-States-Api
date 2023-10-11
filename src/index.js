const express = require('express');
const app = express();
const morgan = require('morgan');

// settings
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json())

//routes
app.use('/states/all',require('./routes/states'))
app.get('/', (req, res) => {
    res.send('Todo en orden')
})

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server is on ${app.get('port')}`);
})