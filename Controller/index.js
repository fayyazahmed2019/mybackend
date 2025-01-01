
const authModel = require('../Model/signupschema');
const bcrypt = require("bcryptjs");






///signin api

const authsignin=async(req,res)=>{
    try {
console.log(req.body,'req.body')
let {email,password} = await req.body;
const checkUser = await authModel.findOne({email:email})

if(checkUser){
console.log(checkUser,'checkUser')
    const passTest = await bcrypt.compare(password,checkUser.pass)
    if(passTest){
        return res.status(200).send({
            message: "login successfull",
            success: true,
        data:{userId:checkUser._id,email:checkUser. email}})
    }else{
        return res.status(400).send({success:false,message:"Password Incorrect!"})
        return alert(data.Message)
    }

}else{
    return res.status(400).send({ success: false, message:"Email Not Found"}) 
}

    }
    catch(e){
        console.log(e,'eeee')
        return res.status(401).send({ success: false, message: e.message });
    }
}








module.exports = {authsignin}