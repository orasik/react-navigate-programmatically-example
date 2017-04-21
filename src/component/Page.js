import React from 'react';

class Page extends React.Component {

    constructor(props) {
        super(props);

        this.state = {title: props.match.params.page};
    }

    componentWillReceiveProps(props) {
        this.setState({title: props.match.params.page});
    }

    render() {
        return (
            <div>
                <h1>Welcome to {this.state.title} page</h1>
            </div>
        );
    }
}
export default Page;