const Repository = require('../repositories/transactionRepository')


async function execute (id) {
    const reporistory = new Repository
    await reporistory.remove()
}