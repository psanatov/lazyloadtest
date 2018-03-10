const express = require('express')
const app = express()

// views
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => res.render('index.html'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))