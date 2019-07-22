'use strict';
module.exports = (sequelize, DataTypes) => {
  const Unit = sequelize.define('Unit', {
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
    PropertyId: {
      type: DataTypes.UUID,
      references: {
        model: 'Properties',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    }
  }, {});
  Unit.associate = function(models) {
    Unit.belongsTo(models.Company)
  };
  return Unit;
};
