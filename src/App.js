import {useState} from "react";

function App() {
    const [state, setState] = useState(0)

    const increment = () => setState(prev => prev + 1)
    return (
        <div className="App">
            <header className="App-header">
                <h1>value = {state}</h1>
                <button onClick={increment}>
                    increment
                </button>
            </header>
        </div>
    );
}

export default App;
