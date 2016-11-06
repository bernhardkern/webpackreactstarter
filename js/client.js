"use strict";

import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>It is running. Update client.js to see live update, without refreshing the browser</h2>
            </div>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);