import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import blackhole from './planet.jpg';

class List extends React.Component{
    render(){
        return(
            <ul>
                <li>Table</li>
                <li>Pen</li>
                <li>Book</li>
            </ul>
        )
    }
}

class App extends React.Component{
    render(){
        return(
            <div>
                <h1 className='test'>Hello React JS</h1>
                <img src={blackhole} width={100} alt="" />
                <List />
                <List />
                <List />
                <List />
            </div>
        )
    }
}


ReactDOM.render(<App/>,document.querySelector("#root"));
