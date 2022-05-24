const router = require('express').Router();
const userRoutes = require('./html');

router.use('/html', htmlRoutes);


module.exports = router;