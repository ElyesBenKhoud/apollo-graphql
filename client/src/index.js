import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import Pages from "./pages";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: " http://localhost:4000",
  cache: new InMemoryCache(),
  //every instance of ApolloClient uses an in-memory cache.
  //This enables it to store and reuse query results so it doesn't have to make as many network requests.
  // This makes our app's user experience feel much snappier.
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);
