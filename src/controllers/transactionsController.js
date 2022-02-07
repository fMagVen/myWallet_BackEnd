import db from '../dbSetup.js'
import { ObjectId } from 'mongodb'
import dayjs from 'dayjs'

export async function postTransaction(req, res){
    try{
        await db.collection("transactions").insertOne( { ...req.body, date: dayjs().locale('pt-br').format('DD/MM')} )
        res.sendStatus(201)
    }catch(e){
        console.log(e)
        res.sendStatus(500)
    }
}

export async function getTransactions(req, res){
    try{
        const transactions = await db.collection("transactions").find({ UserId: req.body.UserId }).toArray()
        res.status(200).send(transactions)
    }
    catch(e){
        console.log(e)
        res.sendStatus(500)
    }
}

export async function deleteTransaction(req, res){

    try{
        const del = await db.collection("transactions").deleteOne({ _id: new ObjectId(req.body.id) })
        if(del.deletedCount < 1){
            return res.status(404).send('you were not supposed to tamper with the code like that ;)')
        }
        res.sendStatus(200)
    }catch(e){
        console.log(e)
        res.sendStatus(500)
    }
}

export async function updateTransaction(req, res){
    try{
        const mod = await db.collection("transactions").updateOne({
            _id: new ObjectId(req.body.id)
        },{$set: 
            { value: req.body.value,
             description: req.body.description}
        })
        if(mod.matchedCount < 1){
            return res.sendStatus(404)
        }
        if(mod.modifiedCount < 1){
            return res.sendStatus(304)
        }
        return res.sendStatus(200)
    }catch(e){
        console.log(e)
        res.sendStatus(500)
    }
}