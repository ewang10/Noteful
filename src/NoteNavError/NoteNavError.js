import React, {Component} from 'react';

class NoteNavError extends Component {
    constructor(props) {
        super(props);
        this.state = {
          hasError: false
        };
      }
      static getDerivedStateFromError(error) {
          return {hasError: true};
      }
      render() {
        if(this.state.hasError) {
            return (
                <h2>Could not display note navigation.</h2>
            )
        }
        return this.props.children;
      }
}

export default NoteNavError;
