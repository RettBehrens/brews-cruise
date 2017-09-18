import * as express from 'express';
var router = express.Router();
import { hotSpringsController } from '../controllers/hotSprings';

// index
router.get('/api/hotSprings', hotSpringsController.index);

export {router};