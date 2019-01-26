'use strict';
module.exports = (sequelize, DataTypes) => {
  const Translation = sequelize.define('Translation', {
    inputText: DataTypes.STRING
  }, {});
  Translation.associate = function(models) {
    // associations can be defined here
  };
  return Translation;
};