var BreweryDb = require('brewerydb-node');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var brewdb = new BreweryDb('8809d40cfe57fccb86525e0d03d9d1c5');
const app = express();
const port = 9000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());

app.route('/beers').get((req, res) =>{
    brewdb.beer.find({}, (err, beers) => {
        if(err){
            res.send(err);
        }
        res.json(beers);
    });
});


app.listen(port);

console.log(`Film RESTful API server started on: ${port}`);

