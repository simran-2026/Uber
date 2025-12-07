const userModel= require('../models/user.models');


module.exports.createUser= async ({
    email, fullname, password
})=>{
    if(!firstname || !email || !password){
        throw new Error('All fields are required');
    }

    const user = userModel.create({
        fullname:{
            firstname,
            lastname,
        },
        email,
        password
    })

    return user;
}