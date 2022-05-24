
const router = require('express').Router();
const userRoutes = require('./notes');

router.use('/notes', notesRoutes);


module.exports = router;