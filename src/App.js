import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      // These would be the cards with their IDs associated and the currentCards/cardQueue would be referencing the IDs
      cards: [1,2,3,4,5,6],
      currentCards: [1,2,3,4],
      cardQueue: [5,6]
    }
  }
  componentDidMount(){
    this.cardsCycle = setInterval(
      () => this.nextCardInQueue(),
      3500
    )
  }
  nextCardInQueue = () => {
    let getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
    let randCard = getRandomInt(0, this.state.currentCards.length);
    let cardQueue = [...this.state.cardQueue]
    let currentCards = [...this.state.currentCards];
    let cardHold = currentCards[randCard];
    currentCards[randCard] = cardQueue[0];
    cardQueue.shift();
    cardQueue.push(cardHold);
    this.setState({
      currentCards,
      cardQueue
    });
  }
  render() {
    return (
      <div>
        {this.state.currentCards.map(card => <div className="card" key={card}>card {card}</div>)}
        Current Card Queue: {this.state.cardQueue.map(card => `${card} `)}
      </div>
    )
  }
}
