import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import './FolderNav.css';

class FolderNav extends Component {
    static contextType = NotefulContext;
    render() {
        const folders = this.context.folders
            .map((folder, i) => {
                return (
                    <div
                        className="folder"
                        key={i}
                        onClick={() => this.context.updateFolder(folder)}
                    >
                        <h4>
                            <NavLink to={`/folder/${folder.id}`} className="folder">
                                {folder.name}
                            </NavLink>
                        </h4>
                    </div>
                )
            });
        return (
            <div className="FolderNav">
                {folders}
                <button
                    type="submit"
                    onClick={() => this.context.reset()}
                >
                    <Link to='/add-folder'>Add Folder</Link>
                </button>
            </div>
        );
    }
}

FolderNav.defaultProps = {
    folders: []
};

export default FolderNav;