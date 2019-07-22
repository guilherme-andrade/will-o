'use strict';
module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('Property', {
    name: DataTypes.STRING,
    internalId: DataTypes.STRING,
    description: DataTypes.TEXT,
    CompanyId: {
      type: DataTypes.UUID,
      references: {
        model: 'Companies',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  }, {});
  Property.associate = function(models) {
    Property.hasMany(models.Unit)
    Property.belongsTo(models.Company)
  };
  return Property;
};
