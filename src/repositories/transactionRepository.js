const TransactionModel = require('../Models/transaction') 
const {startConection, closeConection} = require('../Infra/db/mongodb')

class TransactionRepository {

 async create (transaction) {
    try{
        await startConection()
        await TransactionModel.create(transaction)
        await closeConection()
    } catch(err){
        throw new Error('Erro ao criar transaçao')
    }
}


async findAll () {
    try{
        await startConection()
        const transactions = await TransactionModel.find()
        await closeConection()
        return transactions
    
    }catch(err){
        throw new Error('Erro ao procurar transaçao')
    }
    
}

async remove (_id){
    try{
        await startConection()
        await TransactionModel.deleteOne({ _id })
        await closeConection()
    }catch(err){
        throw new Error('Erro ao remover transaçao')
    }
    
}

async update (_id, data){
    try{
        await startConection()
        await TransactionModel.updateOne({_id}, data)
        await closeConection()
    }catch(err){
        throw new Error('Erro ao atualizar transaçao')
    }
    
}
}

module.exports = TransactionRepository