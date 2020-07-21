'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  users.init({
    uid: DataTypes.TEXT,
    uname: DataTypes.TEXT,
    upwd: DataTypes.TEXT,
    urole: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};