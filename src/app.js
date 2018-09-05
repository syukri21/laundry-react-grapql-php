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

  render() {
    return (
      <div>
        <Header {...this.props}  />
        <Sidebar />
        <main></main>
      </div>
    );
  }
}


export default graphql(sessionid)(App);