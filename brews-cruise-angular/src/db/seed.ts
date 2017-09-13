// import { db } from '../models';
// let DB = db.models;

var hotSpringsDummy = [
	{
    name: "Mount Princeton Hot Springs",
    latitude: 38.733,
    longitude: -106.162,
    temperature: "133°"
	},
  {
    name: "Wagon Wheel Gap Hot Springs",
    latitude: 37.747,
    longitude: -106.831,
    temperature: "135°"
	},
  {
    name: "Pagosa Springs",
    latitude: 37.263,
    longitude: -107.011,
    temperature: "136°"
	},
	{
		name: "Ouray Hot Springs",
		latitude: 38.021,
    longitude: -107.672,
    temperature: "156°"
	},
	{
		name: "Glenwood Springs",
    latitude: 39.548,
    longitude: -107.322,
    temperature: "124°"
	},
	{
		name: "Steamboat Springs",
    latitude: 40.483,
    longitude: -106.827,
    temperature: "102°"
	}
];

// var transactDummy = [
// 	{
// 		userId: 1,
//     restaurantId: 1,
//     likes: 3,
//     trigger: false,
//     favorite: false
//   },
// 	{
// 		userId: 1,
//     restaurantId: 2,
//     likes: 3,
//     trigger: false,
//     favorite: false
//   },
// 	{
// 		userId: 1,
//     restaurantId: 3,
//     likes: 5,
//     trigger: true,
//     favorite: true
//   }
// ];

// var userCreate = function() {
// 	return DB.User.create({
// 			email:"asdf",
// 			password:"asdf"
// 	})
// 	.then(function(user){
// 		DB.Restaurant.bulkCreate(restaurantDummy)
// 		.then(function(restaurant){
// 			DB.Transactions.create({
// 				userId: user.id,
// 				restaurantId: restaurant,
// 				likes: 2,
// 				trigger: false
// 			})
// 		});
// 	})
// }

// userCreate()
// .then(function() {
// 	process.exit();
// });
// var rest = function() {
// 	return DB.Restaurant.bulkCreate(restaurantDummy);
// };
// var user = function() {
// 	return DB.User.create({
// 			email:"asdf",
// 			password:"asdf"
// 	})
// }

// var transact = function() {
// 	return DB.Transactions.bulkCreate(transactDummy)
// }
// rest();
// user();
// transact();