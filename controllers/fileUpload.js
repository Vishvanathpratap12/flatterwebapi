const mediaModel = require('../models/mediaModel')

const uploadFile = (req, res) => {

    try {
        var fileName = req.file.filename;
        console.log('fileName¸', fileName);
        res.send("File Successfully Uploaded");

    }
    catch (err) {
        res.status(500).send(err)
    }

}


module.exports = {
    uploadFile,

}