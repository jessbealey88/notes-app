class NotesModel {
    constructor() {
        this.items = [];
    }

    getNotes() {
        return this.items;
    }

    addNote(title) {
        this.items.push(title);
    }

    reset() {
        this.items = [];
    }

};

module.exports = NotesModel;