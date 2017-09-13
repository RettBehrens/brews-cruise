//Connect
import * as Sequelize from 'sequelize';

var sequelize = new Sequelize('postgres://everettbehrens@localhost:5432/brews_cruise');

var User = sequelize.import("./user");
var HotSpring = sequelize.import("./hotSpring");
var Brewery = sequelize.import("./brewery");

// NEEDS ERD HERE

const db = <any>{};
db.models = {
  User,
  HotSpring,
  Brewery
};

//Export models and Sequelize for seed and dbSetup
db.Sequelize = Sequelize;
db.sequelize = sequelize;

export {db};