const { response } = require('express')
const Bank = require('../models/Banks')

//do debit function
const debit = (req,res,next)=>{
    let bankAcc = req.body.accountNumber
    let debit = req.body.debit
    
    // Bank.findOneAndUpdate({accountNumber:bankAcc},{balance:{'$gt':debit}},{"$set":{balance:balance-debit}})
    // .then(response=>{
    //     res.json({
    //         message:"debit succesfull!",
    //         currentBalance:response.balance-debit
    //     })
    // })
    // .catch({
    //     message:"low balance!",
    //     currentBalance:response.balance
    // })
    var message
    var currentBalance
    Bank.findOne({accountNumber:bankAcc})
    .then(response=>{
        if((response.balance-debit)>=0){

            Bank.findOneAndUpdate({"accountNumber":bankAcc},{"$set":{"balance":response.balance-debit}})
    .then((docs)=>{
        // res.json({
        //     message:"debit successfull!",
        //     currentBalance:response.balance-debit
        // })
        message="debit successfull!",
        currentBalance=response.balance-debit
        msg=`${message} your current balance is ${currentBalance}`
        res.render('status',{message:msg})
        
    })
    .catch(error=>{
        // res.json({
        //     message:"An error occured"
        // })
        message="An error occured while debiting!"
        res.render(
            'status',{message:message}
        )
    })
        }
        else{
            // res.json({
            //     message:"insufficient balance!",
            //     currentBalance:response.balance
            // })
            message="Insufficient balance!",
                currentBalance=response.balance
                msg=`${message} your current balance is ${currentBalance}`
        res.render('status',{message:msg})
                
        }
    })
    .catch(error=>{
        // res.json({
        //     message:"an error occured"
        // })
        message="an error occured"
        res.render(
            'status',{message:message}
        )
    })

}

//update bank details
// https://stackoverflow.com/questions/37267042/mongoose-findoneandupdate-updating-multiple-fields
const update = (req,res,next)=>{
    let bankAcc = req.body.accountNumber
    let balance = req.body.balance
    // Bank.findOneAndUpdate({"accountNumber":bankAcc},{"$set":{"balance":balance}})
    // .exec(function(err,doc){
    //     if(err){
    //         console.log(err)

    //     }
    //     else{
    //         res.send(doc)
    //     }
    // })
    Bank.findOneAndUpdate({"accountNumber":bankAcc},{"$set":{"balance":balance}})
    .then((docs)=>{
        res.json({
            docs
        })
    })
    .catch(error=>{
        res.json({
            message:"An error occured"
        })
    })
}

//add bank details
const store = (req,res,next)=>{
    let bankAcc = new Bank({
        name: req.body.name,
        accountNumber: req.body.accountNumber,
        email: req.body.email,
        balance: req.body.balance
    })
    bankAcc.save()
    .then(response=>{
        res.json({
            message:"added sucessfully"
        })

    })
    .catch(error=>{
        res.json({
            message:"an error occured!"
        })
    })
}

//return single employee
const show = (req,res,next) =>{
    let bankAcc = req.body.accountNumber
    Bank.findOne({accountNumber:bankAcc})
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:"an error occured"
        })
        
    })
}

//show all added using promise
const index = (req,res,next) => {
    Bank.find()
    .then(response=>{
        // res.json({
        //     response
        // })
        res.render('home',{details:response})
    })
    .catch(error=>{
        res.json({
            message:"An error occured"
        })
    })
}




module.exports = {index,show,store,update,debit}