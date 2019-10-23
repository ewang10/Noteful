import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class FolderNav extends Component {
    render() {
        const folders = this.props.folders
            .map((folder, i) => {
                return (
                <NavLink to={`/folder/${folder.id}`} className="folder" key={i}>
                    {folder.name}
                </NavLink>
            )});
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