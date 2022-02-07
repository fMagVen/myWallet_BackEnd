import bcrypt from 'bcrypt'
import {v4 as UniversallyUniqueId} from 'uuid'
import dotenv from 'dotenv'

import db from '../dbSetup.js'

dotenv.config()

export async function postSignup(req, res){

    delete req.body.confirmPassword
    const hashedPassword = bcrypt.hashSync(req.body.password, parseInt(process.env.MAGIC_HASH_NUMBER))

    try{
        await db.collection("users").insertOne({ ...req.body, password: hashedPassword })
        res.sendStatus(201)
    }
    catch(e){
        console.log('problema')
        res.sendStatus(500)
    }
}

export async function postLogin(req, res){

    try{
        const user = await db.collection("users").findOne( { user:req.body.user } )
        if(!user){
            return res.sendStatus(404)
        }
        if(bcrypt.compareSync(req.body.password, user.password)){
            const token = UniversallyUniqueId()
            await db.collection("sessions").insertOne({ token, UserId: user._id})
            return res.status(202).send({name:user.name, token})
        }
        else{
            return res.sendStatus(401)
        }
    }catch(e){
        console.log(e)
        res.sendStatus(500)
    }
}