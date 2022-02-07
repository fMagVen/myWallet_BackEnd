export function validateSchema(schema){
    
    return (req, res, next) => {
        const validation = schema.validate(req.body)
        if(validation.error){
            return res.status(422).send('you were not supposed to tamper with the code like that ;)')  
        }
        next()
    }
}