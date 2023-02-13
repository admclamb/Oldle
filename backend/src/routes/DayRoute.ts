import express from 'express';
import { DayController } from '../controllers/DayController';
import { ErrorHandler } from '../errors/Error';

const router = express.Router();
router
  .route('/:date')
  .get(DayController.read)
  .all(ErrorHandler.methodNotAllowed);

module.exports = router;
