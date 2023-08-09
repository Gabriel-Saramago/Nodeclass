const TransactionModel = require('../Models/transaction') 
const {startConection, closeConection} = require('../Infra/db/mongodb')

class TransactionRepository {

 async create (transaction) {
    await startConection()
    await TransactionModel.create(transaction)
    await closeConection()
}


async findAll () {
    await startConection()
    const transactions = await TransactionModel.find()
    await closeConection()
    return transactions
    
}

}

module.exports = TransactionRepository