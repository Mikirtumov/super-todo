import React from 'react';
import List from "./components/List";


function App() {
    return (
        <div className="todo">
            <div className="todo__sidebar">
                <List/>
            </div>
            <div className="todo__task"></div>
        </div>
    );
}

export default App;

