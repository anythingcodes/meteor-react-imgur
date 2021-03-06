// Any JS in here is automatically ran for us

// Import the React library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import ImageList from './components/image_list';

// Create a component
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { images: [] };
    }

    componentWillMount() {
        Axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
            .then(response =>
                this.setState({ images: response.data.data })
            );
    }

    render() {
        return (
            <div>
                <h1>meteorReactSPA Image List</h1>
                <ImageList images={this.state.images} />
            </div>
        );
    }
};

// Render this component to the screen
Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));
    // Axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
    //     .then(response => console.log(response));
});