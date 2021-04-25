const express = require("express");
const router = express.Router();

const participantService = require('../handler/participant');

router.post('/', participantService.create);
router.get('/all', participantService.findAll);
router.get('/:id', participantService.findOne);
router.put('/:id', participantService.update);
router.delete('/:id', participantService.delete);
module.exports = router;
