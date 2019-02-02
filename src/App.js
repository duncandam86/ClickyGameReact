import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Footer from "./components/Footer/Footer";
import DragQueenCard from "./components/DragQueenCard/DragQueenCard"
import Wrapper from "./components/Wrapper/Wrapper"
import './App.css';
import queens from "./dragqueens.json"

//sets state to 0 and array of clickedQueen is empty
class App extends Component {
  state = {
    queens,
    clickedQueen: [],
    topScore: 0,
    score: 0,
    message: "Welcome to Drag Queen Clicky Game",
  };

  //when click on the card, 
  imageClick = event => {
    //set a current clicked queen card and store in a variable
    const currentClickedQueen = event.target.alt;
    //find the index of the currentclickedqueen in the clicked queen array
    const alreadyClickedQueen = this.state.clickedQueen.indexOf(currentClickedQueen)

    //if clicked Queen has been selected previously, set state to the begining and all cards are reordered
    if (alreadyClickedQueen !== -1) {
      alert("You already clicked her. Sorry you lost!!")
      this.setState({
        //shuffling all queen' cards
        queens: this.state.queens.sort((a, b) => 0.5 - Math.random()),
        //empty clickedQueen array
        clickedQueen: [],
        //reset score
        score: 0,
        //set message
        message: "You lost"
      })
    }
    //if click on an available queen, score goes up by 1 nd cards shuffle
    else if (alreadyClickedQueen === -1) {
      this.setState({
        // shuffle all queen cards
        queens: this.state.queens.sort((a, b) => 0.5 - Math.random()),
        // push the current queen into the clicked queen array
        clickedQueen: this.state.clickedQueen.concat(currentClickedQueen),
        //increase score by 1
        score: this.state.score + 1,
        topScore: this.state.score + 1,
        //set message
        message: "Yaaaasssss!"
      })
    };
    // if score is 16 set to win
    if (this.state.score === 16) {
      alert("Yay you won!")
      this.setState({
        //shuffling all queen' cards
        queens: this.state.queens.sort((a, b) => 0.5 - Math.random()),
        //empty clickedQueen array
        clickedQueen: [],
        //reset score
        score: 0,
        message: "Congratulations! You won!"
      })
    };

    // store top score 
    if (this.state.score > this.state.topScore) {
      this.setState({
        topScore: this.state.score
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar
          message={this.state.message}
        />
        <Jumbotron 
          topScore={this.state.topScore}
          score={this.state.score} 
        />
        <Wrapper>
          {this.state.queens.map(queen => (
            <DragQueenCard
              imageClick={this.imageClick}
              id={queen.id}
              image={queen.image}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
