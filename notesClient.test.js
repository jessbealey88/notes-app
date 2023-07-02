const NotesClient = require('./notesClient');

require('jest-fetch-mock').enableFetchMocks();

describe('Client class', () => {
    it('calls fetch and loads data', (done) => {
        const notesClient = new NotesClient();

        fetch.mockResponseOnce(JSON.stringify({
            name: "some value",
            id: 123
        }));

        notesClient.loadNotes((returnedData) => {
            expect(returnedData.name).toBe("some value");
            expect(returnedData.id).toBe(123);

            done();
        });
    });
});