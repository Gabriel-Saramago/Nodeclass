const transactions = require ('../Infra/db/dados')

class transactionRepositoryInMemory{
 create (transaction) {
    transactions.push(transaction)
}

 findAll () {
    return transactions
}

}

module.exports = transactionRepositoryInMemory