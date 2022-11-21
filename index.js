const express = require('express')                      //importando
var bodyParser = require('body-parser')                 //importando
 
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))  //necessario para body parser funcionar corretamente
app.use(bodyParser.json())                             //necessario para body parser funcionar corretamente

let listOfPersons = [
    {
        "name": "Maria",
        "phone": 9532569
    },
    {
        "name": "Fernanda",
        "phone": 3435343
    },
    {
        "name": "Carla",
        "phone": 4534353
    },
    {
        "name": "Pedro",
        "phone": 1273213
    }
];


app.get('/persons', (req, res) => {


    const name = req.query.name;

    if(name!=undefined){

        for(item of listOfPersons){
            if (item.name == name){
                res.send(item);
            }
        }
    } else{
          res.send(listOfPersons);
    }


})

app.post('/persons', (req, res) => {
    let name = req.body

    listOfPersons.push(name)

    res.send(listOfPersons)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})