const Mysql = require('mysql')

const conn = Mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "easy18"
});
conn.connect((err) => {
    if(err) return console.log(err)
    console.log('Connected to database')
})

const userTable = `CREATE TABLE IF NOT EXISTS easy18.users (id INT(11) NOT NULL AUTO_INCREMENT , username VARCHAR(255) NOT NULL , phone VARCHAR(255) NOT NULL , email VARCHAR(255) NOT NULL , password VARCHAR(255) NOT NULL , otp VARCHAR(255) NOT NULL , PRIMARY KEY (id)) ENGINE = InnoDB;`;

const transactionTable = `CREATE TABLE IF NOT EXISTS easy18.transactions (id INT(11) NOT NULL AUTO_INCREMENT , userId VARCHAR(255) NOT NULL , transaction_status VARCHAR(255) NOT NULL , date VARCHAR(255) NOT NULL , transaction_type VARCHAR(255) NOT NULL , PRIMARY KEY (id)) ENGINE = InnoDB;`

const prepareDataBase = () => {
    return{
        serverMessage(
            error, result, 
            errorMessage, 
            successMessage
        ){
            if(error) return console.log(errorMessage)
            return console.log(successMessage)
        },
        createUserTable(){//Create user table
            conn.query(userTable, (error, result) => {
                prepareDataBase()
                .serverMessage(
                    error, 
                    result,
                    'Error occured while creating user table',
                    'New user table created'
                )
            })
        }, 
        createTransactionTable(){ //Create transction table
            conn.query(transactionTable, (err, result) => {
                prepareDataBase()
                .serverMessage(
                    err, 
                    result,
                    'Error occured while creating transaction table',
                    'New transaction table created'
                )
            })
        },
        CreateDataBase(){ //create database
            const create = `CREATE DATABASE IF NOT EXISTS easy18`
            conn.query(create, (err, response) => {
                if(err) return console.log('Database creation error:', err)
                prepareDataBase().createUserTable()
                prepareDataBase().createTransactionTable()
            })
        }
    }
}

module.exports = {
    conn,
    prepareDataBase,
}













// inserting to transactionTable
// INSERT INTO `transactions` (`id`, `userId`, `transaction_status`, `date`, `transaction_type`) VALUES (NULL, '1234', 'success', '03/5/2023', 'purchase');