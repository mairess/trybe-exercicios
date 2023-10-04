import React from 'react';
import './App.css'
import RandomNumber from './componets/random-number';

type AppState = {
    showRandomNumber: boolean,
};
class App extends React.Component<object, AppState> {
    state = {
        showRandomNumber: false,
    }


    handleClick = () => {
        this.setState((prevState) => (
            { showRandomNumber: !prevState.showRandomNumber }
        ));
    };
    render() {
        const { showRandomNumber } = this.state;
        return (
            <>
                <button
                    onClick={this.handleClick}
                >
                    {showRandomNumber ? 'hide' : 'show'}
                </button>
                {showRandomNumber
                    ? (<RandomNumber max={10} />)
                    : ( <h1>?</h1> )}
            </>
        )
    }
}

export default App;
