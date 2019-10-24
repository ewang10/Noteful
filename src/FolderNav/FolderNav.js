import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './FolderNav.css';

class FolderNav extends Component {
    render() {
        const folders = this.props.folders
            .map((folder, i) => {
                return (
                    <div
                        className="folder"
                        key={i}
                        onClick={() => this.props.handleSelectedFolder(folder)}
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
                <button>
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