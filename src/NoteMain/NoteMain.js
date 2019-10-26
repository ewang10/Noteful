import React, { Component } from 'react';
import Note from '../Note/Note';
import NotefulContext from '../NotefulContext';
//import NoteError from '../NoteError/NoteError';
import ErrorHandler from '../ErrorHandler/ErrorHandler';
import './NoteMain.css';

class NoteMain extends Component {
    static contextType = NotefulContext;
    displayNote() {
        return (
            <>
                <ErrorHandler>
                    <Note
                        note={this.context.note}
                        history={this.props.history}
                    />
                </ErrorHandler>
                <div className="noteContent">
                    {this.context.note.content}
                </div>
            </>
        );
    }
    render() {
        const note = this.context.note ? this.displayNote() : '';
        //console.log(note);
        return (
            <div className="NoteMain">
                {note}
            </div>
        );
    }
}

export default NoteMain;