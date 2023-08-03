const repository = require('../repositories/transactionRepository')


function execute () {
    return repository.findAll()
}

module.exports = {execute}