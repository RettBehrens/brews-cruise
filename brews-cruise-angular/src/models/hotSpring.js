module.exports = function(sequelize, Sequelize) {
  var model = sequelize.define("hotSpring", {
    name: Sequelize.STRING,
    latitude: Sequelize.STRING,
    longitude: Sequelize.STRING,
    temperature: Sequelize.STRING
  });

  return model;
};