const repository = require('../repositories/transactionRepository')

function execute (body){
    repository.create(body)
}



module.exports = {execute}