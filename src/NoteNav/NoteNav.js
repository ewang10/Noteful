import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class NoteNav extends Component {
    render() {

        return (
            <div className="NoteNav">
                <button 
                    type="submit"
                    onClick={this.props.history.goBack()}
                >
                    Back
                </button>
                {this.props.folder ? this.props.folder.name : ''}
            </div>
        );
    }
}

NoteNav.defaultProps = {
    history: {
        goBack: () => {}
    }
}

export default withRouter(NoteNav);