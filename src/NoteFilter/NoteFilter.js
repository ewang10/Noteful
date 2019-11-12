import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import Note from '../Note/Note';
//import NoteError from '../NoteError/NoteError';
import ErrorHandler from '../ErrorHandler/ErrorHandler';
import './NoteFilter.css';

class NoteFilter extends Component {
    static contextType = NotefulContext;
    noFilter() {
        const notes = this.context.notes.map((note, i) =>
            <ErrorHandler key={i}>
                <Note
                    note={note}
                    key={i}
                    history={this.props.history}
                />
            </ErrorHandler>
        );
        return notes;
    }

    noteFilter() {
        const notes = this.context.notes
            .filter(note => note.folderid === this.context.folder.id)
            .map((note, i) =>
                <ErrorHandler key={i}>
                    <Note
                        note={note}
                        key={i}
                    />
                </ErrorHandler>
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
                <button
                    type="submit"
                    onClick={() => this.context.reset()}
                >
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