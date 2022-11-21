const express = require('express')                             //importando
var bodyParser = require('body-parser')                        //importando
 
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))          //necessario para body parser funcionar corretamente
app.use(bodyParser.json())                                  //necessario para body parser funcionar corretamente

let listOfPersons = [
    {
        "id": 11,
        "name": "Maria",
        "phone": 9532569
    },
    {
        "id": 12,
        "name": "Fernanda",
        "phone": 45398
    },
    {
        "id": 13,
        "name": "Carla",
        "phone": 4534353
    },
    {
        "id": 14,
        "name": "Pedro",
        "phone": 1273213
    }
];

function generateID(){
    const lastPerson = listOfPersons[listOfPersons.length-1];
    return lastPerson.id++
}


app.get('/persons/:id', (req, res) => {

     let idNumber = req.params.id

     if(idNumber!=undefined){

        for(item of listOfPersons){
            if (item.id == idNumber){
                res.send(item);
            }
        }
    } else{
        res.status(404)
          res.send(listOfPersons);
    }

})


app.get('/persons', (req, res) => {


    const name = req.query.name;

    if(name!=undefined){

        for(item of listOfPersons){
            if (item.name == name){
                res.send(item);
                return;
            }
        }
    } else{
          res.send(listOfPersons);
    }


})

app.post('/persons', (req, res) => {
    let newPerson = req.body
    newPerson.id = generateID()
    listOfPersons.push(newPerson)
    res.send(listOfPersons)
})


app.put('/persons/:id', (req, res) => {
    if(req.params.id!=undefined){

        for(let item of listOfPersons){
            if (item.id == req.params.id){
                 item.name = req.body.name
                 item.phone = req.body.phone
                 res.send(listOfPersons);
                 return
            }
        }
    } else{
        res.status(404)
          res.send(listOfPersons);
    }

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})