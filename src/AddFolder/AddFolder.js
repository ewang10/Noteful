import React, { Component } from 'react';
import ValidationError from '../ValidationError/ValidationError';
import NotefulContext from '../NotefulContext';
import './AddFolder.css';

class AddFolder extends Component {
    static contextType = NotefulContext;
    constructor(props) {
        super(props);
        this.state = {
            folderName: {
                value: '',
                touch: false
            }
        };
    }
    updateFolderName(name) {
        this.setState({
            folderName: {
                value: name,
                touch: true
            }
        });
    }

    validateFolderName() {
        const name = this.state.folderName.value.trim();
        const match = this.context.folders.find(folder =>
            folder.name === this.state.folderName.value);
        if (name.length === 0) {
            return 'Name is required';
        } else if (match) {
            return "There is already a folder with this name. Please choose another name.";
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const {folderName} = e.target;
        const name = {
            name: folderName.value
        };
        //console.log("folder name ", name);
        this.setState({error: null});

        const url = 'http://localhost:8000/api/folders';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(name),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) {
                //console.log("response not okay");
                throw new Error(res.statusText);
            }
            return res.json();
        })
        .then(data => {
            folderName.value = '';
            //console.log("folder data", data);
            this.context.addFolder(data);
            //console.log("going from add folder to home...");
            this.props.history.push('/');
        })
        .catch(error => this.setState({error}));
    }
    render() {
        const {error} = this.state;
        return (
            <div className="AddFolder">
                <h3>Create a folder</h3>
                <form onSubmit={e => this.handleSubmit(e)}>
                    {error && (<p>{error.message}</p>)}
                    <label htmlFor="folderName">
                        Name
                    </label>
                    <input
                        id="folderName"
                        name="folderName"
                        type="text"
                        aria-required="true"
                        aria-invalid="true"
                        aria-describedby="validate"
                        onChange={e => this.updateFolderName(e.target.value)}
                        required />
                    {this.state.folderName.touch && (
                        <ValidationError message={this.validateFolderName()}/>
                    )}
                    <button 
                        type="submit"
                        disabled={this.validateFolderName()}
                    >
                        Add folder
                    </button>
                </form>
            </div>
        );
    }
}

export default AddFolder;