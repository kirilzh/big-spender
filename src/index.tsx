import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <div>with tsx</div>
            <h2>Sample title for hot reload</h2>
            <p>testing live reload</p>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));