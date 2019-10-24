import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import './Note.css';

class Note extends Component {
    render() {
        const { note } = this.props;
        //console.log(new Date());
        //console.log(note.modified);
        //console.log(new Date(note.modified));
        //const date = note.modified.slice(0, 10);
        //console.log(date.split('-'));
        //console.log(format(new Date(1995, 6, 2), 'Do MMM YYYY'));
        //console.log(format(new Date(note.modified), 'do MMM yyyy'));
        return (
            <div className="Note">
                <h2
                    className="noteName"
                    onClick={() => this.props.handleSelectedNote(note)}
                >
                    <Link to={`/note/${note.id}`}>
                        {note.name}
                    </Link>
                </h2>
                <div className="note-control-date">
                    <div className="note-date">
                        Modified {format(new Date(note.modified), 'do MMM yyyy')}
                    </div>
                    <button type="submit">Delete</button>
                </div>
            </div>
        );
    }
}

export default Note;