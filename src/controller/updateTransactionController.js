const updateTransactionUseCase = require('../UseCases/updateTransactionUseCase')

async function updateTransaction (request, response) {
    const {id} = request.params
    const data = request.body
    await updateTransactionUseCase.execute(id, data)
    return response.json()
}


module.exports = { updateTransaction}