const commonQuery = require('./Query.js')

const insert = async(fileName) =>{
    var data = [fileName];
    var sql = "INSERT INTO medies (file_name) VALUES (?)";
    var result = await commonQuery.CommenQueryInsert(sql, data) 

    if(result){
        return result;
    }else{
        return false;
    }

}


module.exports = {
    insert

}