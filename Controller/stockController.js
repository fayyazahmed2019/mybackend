///booking add data
const stockModel  = require('../Model/stockSchema');



//get all Stock data

const getallstock = async(req, res)=>{
    const allgetstock = await stockModel.find({});
    res.json(allgetstock);
    console.log(allgetstock)

}


//getstockid

const getstockid = async(req, res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const userstock = await stockModel.findById({_id:id});
        console.log(userstock);
        res.status(201).json(userstock)

    } catch (error) {
        res.status(422).json(error);
    }
}




module.exports = {getallstock, getstockid}