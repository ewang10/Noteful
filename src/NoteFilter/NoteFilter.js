import React, { Component } from 'react';
import Note from '../Note/Note';

class NoteFilter extends Component {
    noFilter() {
        const notes = this.props.notes.map((note, i) =>
            <Note note={note} key={i}/>
        );
        return notes;
    }

    noteFilter() {
        const notes = this.props.notes
            .filter(note => note.folderId === this.props.folder.id)
            .map((note, i) => <Note note={note} key={i}/>);
        return notes;
    }
    
    render() {
        const notes = this.props.folder ?
            this.noteFilter() : this.noFilter();
        //console.log(notes);
        return (
            <div className="NoteFilter">
                {notes}
            </div>
        );
    }
}

NoteFilter.defaultProps = {
    notes: []
}

export default NoteFilter;