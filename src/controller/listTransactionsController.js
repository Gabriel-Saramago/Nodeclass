const listTransactionsUseCase = require('../UseCases/listTransactionsUseCase')

function listTransactions (request, reponse){
    const transactions = listTransactionsUseCase.execute()
    return response.status(200).json(transactions)
}

module.exports = {listTransactions}