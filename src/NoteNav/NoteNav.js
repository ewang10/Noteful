import React, {Component} from 'react';

class NoteNav extends Component {
    render() {

        return (
            <div className="NoteNav">
                <button>Back</button>
                {this.props.folder ? this.props.folder.name : ''}
            </div>
        );
    }
}

export default NoteNav;