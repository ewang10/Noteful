import React from 'react';

const NotefulContext = React.createContext({
    folders: [],
    notes: [],
    updateFolder: () => {},
    updateNote: () => {},
    deleteNote: () => {},
    folder: '',
    note: '',
    addFolder: () => {},
    addNote: () => {},
})

export default NotefulContext;