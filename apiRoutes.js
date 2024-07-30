const router = require('express').Router();
const fs = require('fs');

router.get('/notes', async (req, res) => {    
 const notes =await fs.readFile('/db/db.json'); 
 console.log("Notes",notes)
 notes.toString(); console.log(notes.toString());
    res.json(notes);
  
    
})
router.post('/notes', async(req, res) => {
 const existingNotes = await fs.readFile('/db/db.json');;
    const newNote = req.body;
    existingNotes.push(newNote);
    await fs.writeFileSync('/db/db.json', JSON.stringify(existingNotes));   
    res.json(existingNotes);
})      

module.exports = router;