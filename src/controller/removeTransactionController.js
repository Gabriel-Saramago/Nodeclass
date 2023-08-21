const removeTransactionUseCase = require('../UseCases/removeTransactionUseCase')


async function removeTransaction (request, require) {
    const {id} = request.params
    await removeTransactionUseCase.execute(id)
    return response.json()
}


module.exports = {removeTransaction}