const NotesModel = require('./notesModel')
describe('TodoListModel', () => {
    it('returns an empty list of items', () => {
        const model = new NotesModel();

        expect(model.getNotes()).toEqual([]);
    });

    it('adds a note to the list', () => {
        const model = new NotesModel();
        model.addNote('Buy milk');
        model.addNote('Go to the gym');

        expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
    });

    it('resets the list of items to an empty list', () => {
        const model = new NotesModel();
        model.addNote('Buy milk');
        model.addNote('Go to the gym');
        model.reset();

        expect(model.getNotes()).toEqual([]);
    });


})