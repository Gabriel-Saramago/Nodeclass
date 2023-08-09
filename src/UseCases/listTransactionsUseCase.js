const Repository = require('../repositories/transactionRepository')


async function execute () {
    const ListUseCaseRepository = new Repository
    return await ListUseCaseRepository.findAll()
}

module.exports = {execute}