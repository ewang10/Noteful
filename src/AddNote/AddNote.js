import React, { Component } from 'react';
import NotefulContext from '../NotefulContext';
import ValidationError from '../ValidationError/ValidationError';
import './AddNote.css';

class AddNote extends Component {
    static contextType = NotefulContext;
    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: '',
                touched: false
            },
            content: {
                value: '',
                touched: false
            },
            folder: {
                value: 'None',
                touched: true
            }
        }
    }

    findFolderId(name) {
        const folder = this.context.folders.find(folder =>
            folder.name === name);
        return folder.id;
    }

    handleSubmit(e) {
        e.preventDefault();
        const {name, content, folder} = this.state;
        const note = {
            name: name.value,
            content: content.value,
            folderId: this.findFolderId(folder.value),
            modified: new Date()
        }
        this.setState({error: null});
        const url = 'http://localhost:9090/notes';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(note),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => {
            if(!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json()
        })
        .then(data => {
            name.value = "";
            content.value = "";
            folder.value = "";
            console.log("note data ", data);
            this.context.addNote(data);
            this.props.history.push('/');
        })
        .catch(error => this.setState({error}));
    }

    updateName(name) {
        this.setState({
            name: {
                value: name,
                touched: true
            }
        });
    }

    updateContent(content) {
        this.setState({
            content: {
                value: content,
                touched: true
            }
        });
    }

    updateFolder(folder) {
        this.setState({
            folder: {
                value: folder,
                touched: true
            }
        });
    }

    validataName() {
        const name = this.state.name.value.trim();
        if (name.length === 0) {
            return 'Name is required';
        }
    }

    validataContent() {
        const content = this.state.content.value.trim();
        if (content.length === 0) {
            return 'Content is required';
        }
    }

    validataFolder() {
        const folder = this.state.folder.value.trim();
        if (folder === "None") {
            return 'Folder is required';
        }
    }

    render() {
        const options = this.context.folders
            .map((folder, i) =>
                <option key={i} value={folder.name}>{folder.name}</option>
            );
        const {error} = this.state;
        return (
            <div className="AddNote">
                <h3>Create a note</h3>
                <form onSubmit={e => this.handleSubmit(e)}>
                    {error && (<p>{error.message}</p>)}
                    <legend>
                        <label htmlFor="note-name">
                            Name
                        </label>
                        <input
                            id="note-name"
                            name="note-name"
                            type="text"
                            onChange={e => this.updateName(e.target.value)}
                            required />
                        {this.state.name.touched && (
                            <ValidationError message={this.validataName()}/>
                        )}
                        <label htmlFor="note-content">
                            Content
                        </label>
                        <textarea
                            id="note-content"
                            name="note-content"
                            onChange={e => this.updateContent(e.target.value)}
                        />
                        {this.state.content.touched && (
                            <ValidationError message={this.validataContent()}/>
                        )}
                        <label htmlFor="note-folder">
                            Folder
                        </label>
                        <select
                            id="note-folder"
                            name="note-folder"
                            onChange={e => this.updateFolder(e.target.value)}
                            required>
                            <option value="None">...</option>
                            {options}
                        </select>
                        {this.state.folder.touched && (
                            <ValidationError message={this.validataFolder()}/>
                        )}
                        <button 
                            id="add-note-btn" 
                            type="submit"
                            disabled={
                                this.validataName() ||
                                this.validataContent() ||
                                this.validataFolder()
                            }
                        >
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