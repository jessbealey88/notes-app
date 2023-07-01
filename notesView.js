class NotesView {
    constructor(model) {
        this.model = model;
        this.mainContainerEl = document.querySelector('#main-container');

        document.querySelector('#add-note-button').addEventListener('click', () => {
            const newNote = document.querySelector('#note-input').value;
            this.model.addNote(newNote);
        });
    }

 
    displayNotes() {
        const notes = this.model.getNotes();

        notes.forEach(note => {
            const noteEl = document.createElement('div');
            noteEl.textContent = note;
            noteEl.className = 'note';
            this.mainContainerEl.append(noteEl);
        })
    }

}

module.exports = NotesView;