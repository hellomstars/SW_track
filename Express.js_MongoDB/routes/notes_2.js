const { Router }  = require('express');
const Note = require('../models/note');

const router = Router();

router.get('/', (req, res, next) => {
    const { search } = req.query;
    if (search) {
        const notes = Note.search(search);
        res.json(notes);
        return;
    }
    const notes = Note.list();
    res.json(notes);
});

router.get('/:id', (req, res, next) => {
    const id = Number(req.params.id);
    try {
        const note = Note.get(id);
        res.json(note);
    } catch(e) {
        next(e);
    }
});

router.post('/', (req, res, next) => {
    const { title, content } = req.body;
    const author = req.get("author");
    const note = Note.create(title, content, author);
    res.json(note);
});

router.put('/:id', (req, res, next) => {
    const id = Number(req.params.id);
    const { title, content } = req.body;
    const author = req.get("author");
    try {
        const note = Note.update(id, title, content, author);
        res.json(note);
    } catch(e) {
        next(e);
    }
});

router.delete('/:id', (req, res, next) => {
    const id = Number(req.params.id);
    const author = req.get("author");
    try {
        Note.delete(id, author);
        res.json({
            result: "success",
        });
    } catch(e) {
        next(e);
    }
});

module.exports = router;