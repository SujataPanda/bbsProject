import express  from'express'
export const router = express.Router()
import { create, update, findById, findAll, findAllTransaction  } from './controller.js';   

router.post('/bbs/create', create);
router.post('/bbs', update);
router.get('/bbs/getSingleCustomer/:custid', findById);
router.get('/bbs', findAll);
router.get('/bbs/transaction', findAllTransaction);
