import React, { Component } from 'react';
import NotefulContext from '../NotefulContext';
import './AddNote.css';

class AddNote extends Component {
    static contextType = NotefulContext;
    render() {
        const options = this.context.folders
            .map((folder, i) =>
                <option key={i} value={folder.name}>{folder.name}</option>
            );
        return (
            <div className="AddNote">
                <h3>Create a note</h3>
                <form>
                    <legend>
                        <label htmlFor="note-name">
                            Name
                        </label>
                        <input
                            id="note-name"
                            name="note-name"
                            type="text"
                            required />
                        <label htmlFor="note-content">
                            Content
                        </label>
                        <textarea
                            id="note-content"
                            name="note-content"
                        />
                        <label htmlFor="note-folder">
                            Folder
                        </label>
                        <select
                            id="note-folder"
                            name="note-folder"
                            required>
                            <option value="None">...</option>
                            {options}
                        </select>
                        <button type="submit">
                            Add Note
                        </button>
                    </legend>
                </form>
            </div>
        );
    }
}

AddNote.defaultProps = {
    folders: []
}

export default AddNote;