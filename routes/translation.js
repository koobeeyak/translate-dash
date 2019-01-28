const express = require('express');

const router = express.Router();
const translationController = require('../controllers').translationController;

router.get('/', translationController.list);
router.post('/', translationController.create);

module.exports = router;
