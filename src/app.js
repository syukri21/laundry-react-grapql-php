import React from "react";
import ReactDOM from "react-dom";
import { graphql } from "react-apollo" ;
import {gql} from "apollo-boost";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar"



const sessionid = gql`
{
  sessionId
} 
`;

class App extends React.Component {

  constructor (){
    super()
    this.state = {
      open : false
    }
  }
  

  openState(isOpen){
    this.setState({
      open : isOpen
    });
  }

 

  render() {
    return (
      <div>
        <Header {...this.props}  openState = {this.openState.bind(this)}  />
        <Sidebar openState={this.state.open} />
        <main></main>
      </div>
    );
  }
}


export default graphql(sessionid)(App);