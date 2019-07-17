import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';


function App() {
  const GET_COMPANIES = gql`
    query Companies {
      getCompanies {
        id
        name
      }
    }
  `;

  const Companies = () => (
    <Query query={GET_COMPANIES}>
      {({ loading, error, data }) => {
        if (loading) return null;
        if (error) return `Error! ${error}`;

        return (
          <div>
            {
              data.getCompanies.map(company => (
                <div key={company.id}>{company.name}</div>
              ))
            }
          </div>
        );
      }}
    </Query>
  );

  return (
    <div className="App">
      <header className="App-header">
        <p>companies</p>
        {Companies()}
      </header>
    </div>
  );
}

export default App;
