import { response }  from 'express';
import { Customer, Transfer } from './model.js';


export const create = function(req, res) {
    console.log(req.body);
    const new_employee = new Customer(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Customer.create(new_employee, function(err, customer) {
        if (err)
        res.send(err);
        res.json({error:false,message:"Customer added successfully!",data:customer});
        });
    }
}; 


export const update = function(req, res) {
    //console.log(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{

        
        var fromId = req.body.sender
        var toId = req.body.reciever
        var amount = req.body.amount

        updateTransactioDetails(fromId,toId,amount,res);      
       
    }
};

function updateTransactioDetails(fromId,toId,amount,res){

    var transfer = {}

     Customer.updateFromCustomerAmount( fromId, amount , function(err, customer) {
        if (err)
        res.send(err);
    });

     Customer.updateToCustomerAmount( toId, amount , function(err, customer) {
        if (err)
        res.send(err);
    });

    fromCustomerId(transfer,fromId,toId,amount, res)

 
}

function fromCustomerId(transfer,fromId,toId,amount, res){

    Customer.findById(fromId, function(err, customer) {
        if (err)
        res.send(err);
        var rows= JSON.parse(JSON.stringify(customer[0]));

        transfer.from_id = rows.custid
        transfer.from_name = rows?.fname  + " "+ rows?.mname  + " "  +  rows?.ltname 

        toCustomerId(transfer,toId,amount, res) 
    });

    
}

function toCustomerId(transfer,toId,amount, res){

    Customer.findById(toId, function(err, customer) {
        if (err)
        res.send(err);

        var rows= JSON.parse(JSON.stringify(customer[0]));
       
        transfer.to_id = rows.custid
        transfer.to_name = rows?.fname  + " " + rows?.mname  + " " +  rows?.ltname 
        transfer.amount_transfered = amount

        createTransaction(transfer, res)
    });


}

function createTransaction(transfer, res){

    
    const new_transfer = new Transfer(transfer);
    Transfer.create(new_transfer, function(err, transfer) {
        if (err)
        res.send(err);
        res.json({error:false,message:"Transaction added successfully!",data:transfer});
        });


}

export const findById = function(req, res) {
  
        Customer.findById(req.params.custid, function(err, customer) {
            if (err)
            res.send(err);
            res.json( customer );
        });

};

export const findAll = function(req, res) {
    //console.log(req.body);
   
        Customer.findAll( function(err, customer) {
            if (err)
            res.send(err);
            res.json( customer );
        });

};

export const findAllTransaction = function(req, res) {
    //console.log(req.body);
   
        Transfer.findAll( function(err, transaction) {
            if (err)
            res.send(err);
            res.json( transaction );
        });

};