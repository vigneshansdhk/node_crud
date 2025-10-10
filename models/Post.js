const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
 
const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'posts',
  timestamps: true
});
 
module.exports = Post;