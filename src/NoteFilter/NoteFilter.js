import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Note from '../Note/Note';
import './NoteFilter.css';

class NoteFilter extends Component {
    noFilter() {
        const notes = this.props.notes.map((note, i) =>
            <Note 
                note={note} 
                key={i} 
                handleSelectedNote={this.props.handleSelectedNote}
            />
        );
        return notes;
    }

    noteFilter() {
        const notes = this.props.notes
            .filter(note => note.folderId === this.props.folder.id)
            .map((note, i) => 
                <Note 
                    note={note} 
                    key={i}
                    handleSelectedNote={this.props.handleSelectedNote}
                />
            );
        return notes;
    }
    
    render() {
        const notes = this.props.folder ?
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