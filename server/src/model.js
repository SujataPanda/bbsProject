
import {dbConn} from'../config/config.js';
export var Customer = function (customer) {


    this.fname = customer.fname;    
    this.mname = customer.mname;
    this.ltname = customer.ltname;
    this.city = customer.city;
    this.mobileno = customer.mobileno;
    this.email = customer.email;
    this.occupation = customer.occupation;
    this.dob = customer.dob;
    this.amount = customer.amount;
    
};

export var Transfer = function(transfer){
console.log(transfer)
    this.from_id = transfer.from_id;    
    this.from_name = transfer.from_name;
    this.to_id = transfer.to_id;
    this.to_name = transfer.to_name;
    this.amount_transfered = transfer.amount_transfered;

}

Transfer.create = function(newTransferData, result){
    dbConn.query("INSERT INTO transaction set?", newTransferData, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    }); 
}

Customer.create = function (newCustomer, result) {
    // console.log(newDemo);
    dbConn.query("INSERT INTO customer set?", newCustomer, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Customer.updateFromCustomerAmount = function (fromId, amount, result) {
    console.log(amount);
    // dbConn.query("UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [employee.first_name,employee.last_name,employee.email,employee.phone,employee.organization,employee.designation,employee.salary, id], function (err, res) {
    dbConn.query("UPDATE customer SET amount = amount - ? WHERE custid = ?", [amount, fromId], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            // console.log(result.toString());

            result(null, res);
        }

    });
};

Customer.updateToCustomerAmount = async function (toId, amount, result) {
    console.log(amount);
    // dbConn.query("UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [employee.first_name,employee.last_name,employee.email,employee.phone,employee.organization,employee.designation,employee.salary, id], function (err, res) {
    await dbConn.query("UPDATE customer SET amount= amount + ? WHERE custid = ?", [amount, toId], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            // console.log(result.toString());

            result(null, res);
        }

    });
};


Customer.findById = async function (custid, result) {
    console.log("Customer ID : " +custid);

    await dbConn.query("Select * from customer WHERE custid = ?", custid, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            // console.log(result.toString());

            result(null, res);
        }

    });
};

Customer.findAll = function (result) {
    
    dbConn.query("Select * from customer ", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            // console.log(result.toString());

            result(null, res);
        }

    });
};

Transfer.findAll = function (result) {
    
    dbConn.query("Select * from transaction ", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            // console.log(result.toString());

            result(null, res);
        }

    });
};

