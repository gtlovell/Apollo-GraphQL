import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';
import logo from './logo.svg';
import './App.css';

// Connecting to GrapQL API
const client = new ApolloClient({
  uri: 'https://api-useast.graphcms.com/v1/cjoft95z37yw401dg1egocbfu/master'
});

const POSTS_QUERY = gql`
  query {
    posts {
      id
      title
      body
      createdAt
    }
  }
`;

// client
//   .query({
//     query: testQuery
//   })
//   .then(res => console.log(res));

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title" />
            Welcome to React
          </header>
          <Query query={POSTS_QUERY}>
            {({ loading, data }) => {
              if (loading) return 'Loading...';
              const { posts } = data;
              return posts.map(post => <h1>{post.title}</h1>);
            }}
          </Query>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
