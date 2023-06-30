/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

describe('Notes view', () => {
    it('displays notes added to notes model', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');

        const model = new NotesModel();
        const view = new NotesView(model);
        model.addNote('A first note');
        model.addNote('Another note');

        view.displayNotes();

        expect(document.querySelectorAll('div.note').length).toEqual(2);


    });
});