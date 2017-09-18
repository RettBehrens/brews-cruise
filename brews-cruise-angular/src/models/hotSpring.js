module.exports = function(sequelize, Sequelize) {
  var model = sequelize.define("hot_spring", {
    name: Sequelize.STRING,
    latitude: Sequelize.STRING,
    longitude: Sequelize.STRING,
    temperature: Sequelize.STRING
  });

  return model;
};