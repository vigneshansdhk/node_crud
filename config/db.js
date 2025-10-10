const { Sequelize } = require('sequelize');
 
const sequelize = new Sequelize('ecommerce', 'root', 'Crevel@123', {
  host: 'localhost',
  dialect: 'mysql'
});
 
module.exports = sequelize;