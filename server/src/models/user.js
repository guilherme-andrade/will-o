'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    CompanyId: {
      type: DataTypes.UUID,
      references: {
        model: 'Companies',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.Company, { as: 'Company' })
  };
  return User;
};
