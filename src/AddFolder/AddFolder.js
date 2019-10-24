import React, { Component } from 'react';
import './AddFolder.css';

class AddFolder extends Component {
    render() {
        return (
            <div className="AddFolder">
                <h3>Create a folder</h3>
                <form>
                    <label htmlFor="folder-name">
                        Name
                    </label>
                    <input
                        id="folder-name"
                        name="folder-name"
                        type="text"
                        required />
                    <button type="submit">Add folder</button>
                </form>
            </div>
        );
    }
}

export default AddFolder;