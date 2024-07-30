const router = require('express').Router();
const util = require('util');
const fs = require('fs');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


router.get('/notes', async (req, res) => {
    readFileAsync('./db/db.json', 'utf8').then((notes) => {
        let parsedNotes

        try {
            parsedNotes = [].concat(JSON.parse(notes))
            console.log("parsednotes", parsedNotes)
        } catch (err) {
            parsedNotes = []
        } return res.json(parsedNotes)

    });

})
router.post('/notes', async (req, res) => {
    // const existingNotes = await fs.readFile('/db/db.json');
    const newNote = req.body
    console.log('new note', newNote)

    let existingNotes = readFileAsync('./db/db.json', 'utf8').then((notes) => {
        let parsedNotes

        try {
            parsedNotes = [].concat(JSON.parse(notes))
            console.log("parsednotes", parsedNotes)
        } catch (err) {
            parsedNotes = []
        } return parsedNotes

    }).then((notes) => [...notes, newNote]).then((updatedNotes) => writeFileAsync('./db/db.json', JSON.stringify(updatedNotes))).then(() => newNote)
    console.log('existing notes', existingNotes)

    res.json(existingNotes);
})

module.exports = router;