"use strict";

import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World! Camilo here!</h1>
                <h2>Can you belive?</h2>
            </div>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);