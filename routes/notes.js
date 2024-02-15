var express = require('express');
var router = express.Router();
const notesCtrl = require("../controllers/notes");



/* GET users listing. */
// GET -> ALL /notes
router.get('/', notesCtrl.index);
// GET -> /notes/:id
router.get('/:id', notesCtrl.show);



module.exports = router;
