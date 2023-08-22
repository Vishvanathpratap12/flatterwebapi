var con= require('../config/database');
 
const CommenQueryInsert = (query,data) => new Promise((resolve, reject) =>{
    
    con.query(query, [data], (error, result, fields) => {
        try {
           return resolve(result);
            
        }
        catch  ( error ){
           return reject(error);

        }
    
});
    
});

module.exports = {

    CommenQueryInsert
   
}