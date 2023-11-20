const jwt = require('jsonwebtoken')

async function createJwtToken(user){

    const payload = {
      _id: user._id,
      name:user.name,
      email:user.email
    }
    const token = jwt.sign(payload, process.env.SECRETE_KEY)
    return token

}
module.exports= {createJwtToken}