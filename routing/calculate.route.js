const express = require('express')
const router = express.Router()


function calc (num1, num2, op){
    if( op == 'som'){

        let result = num1 + num2
        return result

     } else if(op == 'mul'){

        let result = num1 - num2
        return result

     } else if (op == 'div'){

        let result = num1 / num2
        return result

     }else{
        let result = num1 * num2
        return result     
     }
    }


router.get('', (req, res) => {



    let number1 = parseInt(req.query.a);
    let nunber2 =parseInt( req.query.b);
    let op = req.query.op;
    

    
    if( op == 'som'){

        let result = number1 + nunber2
        return result

     } else if(op == 'mul'){

        let result = number1 - nunber2
        return result

     } else if (op == 'div'){

        let result = number1 / nunber2
        return result 

     }else{
        let result = number1 * nunber2
        return result     
     }
    }

    
)

router.post('', (req, res) => {

    let number1 = parseInt(req.body.a);
    let nunber2 =parseInt( req.body.b);
    let op = req.body.op;
    
    result = calc(number1, nunber2, op)

    res.send( (result).toString() );
    
})



module.exports = router;