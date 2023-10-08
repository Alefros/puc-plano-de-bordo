const bcrypt = require('bcrypt');
const secretKey = "SECRET_KEY_PLANO-DE-BORDO";

async function hashPassword(password) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}

async function comparePassword(password, hash) {
    return await bcrypt.compare(password, hash);
}

async function encryptText(text) {
    return await bcrypt.hash(text, this.secretKey);
}

module.exports.hashPassword = hashPassword;
module.exports.comparePassword = comparePassword;
module.exports.encryptText = encryptText;