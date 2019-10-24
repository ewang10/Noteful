import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './NoteNav.css';

class NoteNav extends Component {
    render() {

        return (
            <div className="NoteNav">
                <button
                    type="submit"
                    onClick={() => this.props.history.goBack()}
                >
                    Back
                </button>
                <p>
                    {this.props.note ? this.props.note.name : ''}
                </p>

            </div>
        );
    }
}

NoteNav.defaultProps = {
    history: {
        goBack: () => { }
    }
}

export default withRouter(NoteNav);