import React from 'react';

const NotefulContext = React.createContext({
    folders: [],
    notes: [],
    updateFolder: () => {},
    updateNote: () => {},
    folder: '',
    note: '',
})

export default NotefulContext;