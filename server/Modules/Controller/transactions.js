const { conn } = require('../dbConn/conn');

const SELECTALLTRANSACTION = `SELECT * FROM transactions`
const SINGLETRANSACTION = (id) => `SELECT * FROM transactions WHERE id = '${id}'`
const dELETETRANSACTION = (id) => `DELETE FROM transactions WHERE id = '${id}'`

const getTransactions = () => {
    return{
        getResponse(response){
            if(response.length > 0) return response
            return "Empty"
        },
        getAllTransactions(req, res){// Get all transactions
            conn.query(SELECTALLTRANSACTION, (error, result) => 
            {res.json(getTransactions().getResponse(result))})
        },
        getSingleTransaction(req, res){// Get single transaction
            conn.query(SINGLETRANSACTION(req.body.id), (error, result) => 
            {res.json(getTransactions().getResponse(result))})
        },
        deleteTransaction(req, res){// delete transaction
            conn.query(dELETETRANSACTION(req.body.id), (error, result) => {
                if(result.affectedRows > 0) return res.json('Record deleted')
                return res.json('Network error record could not be deleted')
            })
        }
    }
}


module.exports = {
    getTransactions
}
