const db = require('../db');

const signup = async (username, password, role) => {
    try {
        const result = await db.query(`INSERT INTO accounts (user_name, password, role)
                                       VALUES ('${username}', '${password}', '${role}')`);
        console.log('abc1')
        return result;
    }
    catch (error) {

        throw error;
    }
}

module.exports = {
    signup
}