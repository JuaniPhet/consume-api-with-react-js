import React from 'react';

class Item extends React.Component {

constructor(props) {
    super(props)

    this.state = {
        clicks: 0,
        totalRemaining : 20
    }
}

    clickMe(){
        this.setState({
            clicks: this.state.clicks + 1,
            totalRemaining: this.state.totalRemaining - 1
        })
        console.log("I clicked :", this.props.name)
        if(this.state.clicks === this.state.totalRemaining){
            console.log("Stop there")
        }
    }

    render() {
      return(
        <div>
            <h1 onClick={() => this.clickMe()}>
              Hello from {this.props.name}
            </h1>
            <span>{this.state.clicks} is the number of clicks. {this.state.totalRemaining}</span>
        </div>
      )
    }
}

export default Item;