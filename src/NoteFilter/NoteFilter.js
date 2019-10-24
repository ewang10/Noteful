import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import Note from '../Note/Note';
import './NoteFilter.css';

class NoteFilter extends Component {
    static contextType = NotefulContext;
    noFilter() {
        const notes = this.context.notes.map((note, i) =>
            <Note 
                note={note} 
                key={i} 
            />
        );
        return notes;
    }

    noteFilter() {
        const notes = this.context.notes
            .filter(note => note.folderId === this.props.folder.id)
            .map((note, i) => 
                <Note 
                    note={note} 
                    key={i}
                />
            );
        return notes;
    }
    
    render() {
        const notes = this.context.folder ?
            this.noteFilter() : this.noFilter();
        //console.log(notes);
        return (
            <div className="NoteFilter">
                {notes}
                <button type="submit">
                    <Link to='/add-note'>
                        Add Note
                    </Link>
                </button>
            </div>
        );
    }
}

NoteFilter.defaultProps = {
    notes: []
}

export default NoteFilter;