import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";




const client = new ApolloClient({
  uri: "php/graphql/api.php"
});

class Main extends React.Component {
  render() {
    return (
      <div>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
