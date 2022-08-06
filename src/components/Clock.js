import React from "react";

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount(){
  setInterval(
      () => this.tick(),
    1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render(){
    return(
      <div className="container">
        <div className="time">
          {this.state.date.getHours() < 10 ? "0" + this.state.date.getHours() : this.state.date.getHours()}:
          {this.state.date.getMinutes() < 10 ? "0" + this.state.date.getMinutes() : this.state.date.getMinutes()}:
          {this.state.date.getSeconds() < 10 ? "0" + this.state.date.getSeconds() : this.state.date.getSeconds()}
        </div>
      </div>
    );
  }
}

export default Clock;