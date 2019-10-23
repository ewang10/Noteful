import React, {Component} from 'react';

class AddFolder extends Component {
    render() {
        return (
            <div className="AddFolder">
                <h3>Create a folder</h3>
                <form>
                    <label htmlFor="folder-name">
                        <input 
                            id="folder-name"
                            name="folder-name"
                            type="text"
                        required/>
                        <button type="submit">Add folder</button>
                    </label>
                </form>
            </div>
        );
    }
}

export default AddFolder;