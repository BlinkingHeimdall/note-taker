const fs = require('fs');
const router = require('express').Router();
const userId = require('../../public/assets/js/userId');

// this willget all the notes
router.get('/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
    res.json(notes);
});

// this will post new notes input on the site
router.post('/notes', (req, res) => {
    const note = req.body;
    const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
    const idArr = [];

    notes.forEach(note => {
        idArr.push(note.id);
    });
    
    note.id = userId();

    if(idArr.length) {
        for(i = 0; i < idArr.length; i++) {
            if(note.id !== idArr[i]) {
                notes.push(note);
                break;
            } else {
                note.id = userId();
            };
        };
    } else {
        notes.push(note);
    };
    

    fs.writeFileSync('./db/db.json', JSON.stringify(notes, null, 2));
    
    res.json(note);
});

// this will delete an existing note when a user clicks the trash icon
router.delete('/notes/:id', (req, res) => {
    const delId = req.params.id;
    const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
    const keepNotes = [];

    notes.forEach(note => {
        if(note.id !== delId) {
            keepNotes.push(note);
        };
    });

    fs.writeFileSync('./db/db.json', JSON.stringify(keepNotes, null, 2));
    res.send('DELETE request received');
});

module.exports = router;