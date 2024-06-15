const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/bmicalculator.html');
});

app.post('/bmicalculator', function(req, res) {

    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var result = weight / Math.pow(height, 2);

    res.send('Your BMI is: ' + result);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});