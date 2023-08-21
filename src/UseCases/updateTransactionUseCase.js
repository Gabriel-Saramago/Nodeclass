const Reporistory = require('../repositories/transactionRepository')

async function execute (id, data) {
    const repository = new Reporistory
    await repository.update(id, data)
}

module.exports = {execute}