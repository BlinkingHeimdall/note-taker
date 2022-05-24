const router = require('express').Router();


router.get('/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});


router.post("/notes", (req, res) => {
    const noteBody = req.body;
    let newData = database || [];
    newData.push(noteBody);
    fs.write("newData", db.json(database), (err) => {
        if (err) throw err;
    });
    console.log(noteBody);
});

module.exports  = router;