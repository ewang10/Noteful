import React, {Component} from 'react';
import Note from '../Note/Note';

class NoteMain extends Component {
    displayNote() {
        return (
            <>
                <Note 
                    note={this.props.note}
                    handleSelectedNote={this.props.handleSelectedNote}
                />
                <div className="noteContent">
                    {this.props.note.content}
                </div>
            </>
        );
    }
    render() {
        const note = this.props.note ? this.displayNote() : '';
        //console.log(note);
        return (
            <div className="NoteMain">
                {note}
            </div>
        );
    }
}

export default NoteMain;