const mongoose  = require('mongoose')

mongoose.connect(
    'mongodb://localhost/upload-files',
    {
        useUnifiedTopology:true,
        useNewUrlParser:true
    })
    .then(()=> console.log('Database connected.'))
    .catch(error => console.log('Error in Database connection', error))