import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

class Note extends Component {
    render() {
        const {note} = this.props;
        return (
            <div className="note">
                <h2 className="noteName">
                    <Link to={`/note/${note.id}`}>
                        {note.name}
                    </Link>
                </h2>
                <div className="note-date">
                    Modified {format(note.modified, 'Do MMM YYYY')}
                </div>
                <button type="submit">Delete</button>
            </div>
        );
    }
}

export default Note;