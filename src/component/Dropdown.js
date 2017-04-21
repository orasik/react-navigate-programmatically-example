import React from 'react';
import { withRouter } from 'react-router';

class Dropdown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {selectedPage: ''}
    }

    navigate(event) {
        this.setState({selectedPage: event.target.value});
        this.props.history.push(event.target.value);
    }


    render() {
        return (
            <div>
                <select onChange={(event) => this.navigate(event)}>
                    <option id="0" value="/">---- Please Select --</option>
                    <option id="1" value="/about">About</option>
                    <option id="2" value="/faq">FAQ</option>
                    <option id="3" value="/contact">Contact</option>
                </select>
            </div>
        );
    }
}

export default withRouter(Dropdown);