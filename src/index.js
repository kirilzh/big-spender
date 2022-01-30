import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <h2>Hello from rollup</h2>
            <p>testing live reload</p>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));