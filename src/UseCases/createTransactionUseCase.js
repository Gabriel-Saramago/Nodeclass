const Repository = require('../repositories/transactionRepository')

async function execute (body){
    const repository = new Repository()
    await repository.create(body)
}



module.exports = {execute}