'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: DataTypes.STRING
  }, {});
  Company.associate = function(models) {
    // associations can be defined here
    Company.hasMany(models.User)
    Company.hasMany(models.Property)
    Company.hasMany(models.Unit)
  };
  return Company;
};
