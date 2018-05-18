import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// COMPONENTS
import Home from './components/home';
import Artist from './components/artist';

const App = () => {
    return(
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}></Route>
                <Route path="/artist/:id" component={Artist}></Route>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))