import React from 'react';
class Square extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = props;
    // }

    render() {
        return (
            <button className="btn btn-outline-primary"
                onClick={this.props.onClick}>
                {this.props.value}
            </button>
        );
    }
    }
export default Square;