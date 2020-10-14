var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hydro-db').then(() => {
    console.log('connected to mongodb!');
} , 
(error) => {
    console.error('failed to connect to MondoDB: ' , error);
});

module.exports = mongoose.connection; 