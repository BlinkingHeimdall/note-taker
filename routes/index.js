const router = require('express').Router();

const apiRoutes = require('./apiRoutes/');
const htmlRoutes = require('./htmlRoutes/');



router.use('/htmlRoutes', htmlRoutes);
router.use('/apiRoutes', apiRoutes);



module.exports = router;