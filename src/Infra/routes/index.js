const {Router} = require('express')
const { createTransaction } = require('../../controller/createTransactionController')
const { listTransactions } = require('../../controller/listTransactionsController')
const { removeTransaction } = require('../../controller/removeTransactionController')
const { updateTransaction } = require('../../controller/updateTransactionController')

const routes = Router()

routes.get('/transactions' , listTransactions)
routes.post('/transaction' , createTransaction)
routes.delete('/trasaction/:id' , removeTransaction)
routes.put('transaction/:id', updateTransaction)

module.exports = routes