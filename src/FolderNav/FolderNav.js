import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
                        <NavLink to={`/folder/${folder.id}`} className="folder">
                            {folder.name}
                        </NavLink>
                    </div>
                )
            });
        return (
            <div className="FolderNav">
                {folders}
                <button>Add Folder</button>
            </div>
        );
    }
}

FolderNav.defaultProps = {
    folders: []
};

export default FolderNav;