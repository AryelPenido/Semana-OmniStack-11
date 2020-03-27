const crypto = require ('crypto');
module.exports =  function generatUnicId(){
    return crypto.randomBytes(4).toString('HEX');
} 