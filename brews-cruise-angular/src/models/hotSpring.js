module.exports = function(sequelize, Sequelize) {
  var model = sequelize.define("hotSpring", {
    name: Sequelize.STRING,
    latitude: Sequelize.NUMBER,
    longitude: Sequelize.NUMBER,
    temperature: Sequelize.STRING
  });

  return model;
};