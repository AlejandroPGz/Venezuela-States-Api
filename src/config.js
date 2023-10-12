const { config } = require('dotenv');
const aja = config();

const PORT = process.env.PORT || 3030;

module.exports = PORT;