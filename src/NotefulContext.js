import React from 'react';

const NotefulContext = React.createContext({
    folders: [],
    notes: [],
    updateFolder: () => {},
    updateNote: () => {},
    deleteNote: () => {},
    folder: '',
    note: '',
})

export default NotefulContext;