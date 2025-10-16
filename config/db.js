const { Sequelize } = require('sequelize');
 
const sequelize = new Sequelize('node_crud', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});
 
module.exports = sequelize;