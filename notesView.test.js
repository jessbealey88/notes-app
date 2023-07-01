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
       
        const input = document.querySelector('#note-input');
        input.value = 'New test note';

        const button = document.querySelector('#add-note-button');
        button.click();

        view.displayNotes();

        expect(document.querySelectorAll('div.note').length).toEqual(1);
        expect(document.querySelectorAll('div.note')[0].textContent).toEqual('New test note');

    });
});