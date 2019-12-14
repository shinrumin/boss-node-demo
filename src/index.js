const express = require('express');
const engine = require('ejs-mate');


const app = express();


app.set('view', )
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 5500);

app.listen(app.get('port'), () => {
    console.log('sever ok', app.get('port'));
})
