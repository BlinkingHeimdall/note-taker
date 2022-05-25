const path = require('path');
const router = require('express').Router();

// This routes to the main page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// this routes to the notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// this redirects to the main page
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;