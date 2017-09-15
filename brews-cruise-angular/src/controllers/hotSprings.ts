import { db } from '../models';
var HotSpring = db.models.HotSpring;

function index(req, res) {
	HotSpring.findAll().then(function(hotsprings) {
		res.json(hotsprings);
	});
}

const hotSpringsController = <any>{};
hotSpringsController.index = index;

export {hotSpringsController};