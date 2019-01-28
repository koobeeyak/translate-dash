const express = require('express');

const router = express.Router();
const translationController = require('../controllers').translationController;

router.get('/', translationController.list);

module.exports = router;
