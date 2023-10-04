import React from 'react';

type RandomNumberProps = {
    max: number;
};

type RandomNumberState = {
    randomNumber: number;
};

class RandomNumber extends React.Component<RandomNumberProps, RandomNumberState> {
    state = {
        randomNumber: 0,
    };

    generateRandomNumber = () => {
        const { max } = this.props;
        return Math.floor(Math.random() * max) + 1
    };

    handleClick = () => {
        const newNumber = this.generateRandomNumber();

        this.setState({
            randomNumber: newNumber,
        });
    }

    render() {
        const { randomNumber } = this.state;
        
        return (
            <>
            <h1>{randomNumber}</h1>

            <button
            onClick={ this.handleClick }
            >
                generate
            </button>
            </>
        )
    }
}

export default RandomNumber;
