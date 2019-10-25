import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import NotefulContext from '../NotefulContext';
import './Note.css';

class Note extends Component {
    static contextType = NotefulContext;
    deleteNoteRequest(noteId, cb) {
        const url = 'http://localhost:9090/notes';
        fetch(`${url}/${noteId}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => {
            if(!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json;
        })
        .then(data => {
            cb(noteId);
            //console.log(this.props.history);
            this.props.history.push('/');
        })
        .catch(err => {
            console.log("something went wrong: " + err.message);
        });
    }
    render() {
        //console.log(this.props.history);
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
                    onClick={() => this.context.updateNote(note)}
                >
                    <Link to={`/note/${note.id}`}>
                        {note.name}
                    </Link>
                </h2>
                <div className="note-control-date">
                    <div className="note-date">
                        Modified {format(new Date(note.modified), 'do MMM yyyy')}
                    </div>
                    <button 
                        type="submit"
                        onClick={() => 
                            this.deleteNoteRequest(note.id, 
                                this.context.deleteNote)}
                    >
                            Delete
                    </button>
                </div>
            </div>
        );
    }
}

export default Note;