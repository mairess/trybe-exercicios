import React from 'react';
import './App.css'
import RandomNumber from './componets/random-number';

class App extends React.Component {
render() {
    return (
        <RandomNumber 
        max={ 5 }
        />
    )
}
}

export default App;
