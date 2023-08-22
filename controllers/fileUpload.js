const mediaModel = require('../models/mediaModel')

const uploadFile = async(req, res) => {

    try {
        var fileName = req.file.filename;
        console.log('fileName¸', fileName);
        var result = await mediaModel.insert(fileName);
        if(result.insertId > 0){
        
            res.send('File Uploded Successfully');
        }else{
            var data = {
                status:404,
                Message:'File Not Found!'
            } 
            res.status(500).send(data);
        }
    }
    catch (err) {
        res.status(500).send(err)
    }

}


module.exports = {
    uploadFile,

}