const express = require('express')
const router = express.Router()

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
    return lastPerson.id+1
}


router.get('/:id', (req, res) => {

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


router.get('', (req, res) => {


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


router.post('', (req, res) => {
    let newPerson = req.body
    newPerson.id = generateID()
    listOfPersons.push(newPerson)
    res.status(201)
    res.send(newPerson)
})


router.put('/:id', (req, res) => {
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


router.put('/:id', (req, res) => {

        for(let pos in listOfPersons){
            if (listOfPersons[pos].id == req.params.id){
                 listOfPersons.splice(pos, 1);
                 res.status(200)
                 return
            }
        }

})


router.delete('/:id', (req, res) => {

    const searchId = req.params.id;

    for (let pos in listOfPersons) {

        const personId = listOfPersons[pos].id;

        if (personId == searchId) {
            listOfPersons.splice(pos, 1);
            res.status(204);
            res.send();
            return;
        }
    }

    res.status(404);
    res.send({ message: `Person with id ${searchId} not found!` });

})


module.exports = router;