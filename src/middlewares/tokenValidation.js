import db from '../dbSetup.js'

export async function validateToken(req, res, next){
    const authorization = req.headers.authorization
    const token = authorization?.replace('Bearer ', '')

    try{
        const session = await db.collection("sessions").findOne( { token } )
        if(!session){
            return res.status(401).send('Sessão expirada, faça login novamente')
        }

        const user = await db.collection("users").findOne( { _id: session.UserId } )
        if(!user){
            return res.status(401).send('you were not supposed to tamper with the code like that ;)')
        }

        req.body.UserId = session.UserId
        next()
    }catch(e){
        console.log(e)
        return res.sendStatus(500)
    }
}