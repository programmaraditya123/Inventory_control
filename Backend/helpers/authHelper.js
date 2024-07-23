const bcrypt = require('bcrypt');

//hashioing password
const hashPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password,10)
            return hashedPassword;
    }
    catch (error) {
        console.log(error);
        
    }
}





const comparePassword = async (password,hashedPassword) => {
    return bcrypt.compare(password,hashedPassword)
};

module.exports = {comparePassword,hashPassword};