const { query } = require('@simpleview/sv-graphql-client');

class Movies {
  constructor({ graphUrl, graphServer }) {
    this._graphUrl = graphUrl;
    this._graphServer = graphServer;
  }

  async find({ fields, context, input, headers}) {
    const queryStr = `
      query Movies_find($input: training_movies_find_input) {
        training {
          movies_find(input: $input) {
            ${fields}
          }
        }
      }
    `;

    const variables = {
      input,
    };

    const result = await query({
      query: queryStr, 
      variables, 
      url: this._graphUrl,
      headers,
      key: "training.movies_find.docs",
      clean: true
    });

    return result
  }

  async insert({ fields, context, input, headers}) {
    const queryStr = `
      mutation Movies_insert($input: [training_movies_insert_input!]!) {
        training {
          movies_insert(input: $input) {
            ${fields}
          }
        }
      }
    `;

    const variables = {
      input,
    };

    const result = await query({
      query: queryStr, 
      variables, 
      url: this._graphUrl,
      headers,
      key: "training.movies_insert",
      clean: true
    });

    return result
  }

  async remove({ fields, context, input, headers}) {
    const queryStr = `
      mutation Movies_remove($input: training_movies_remove_input) {
        training{
          movies_remove(input: $input) {
            ${fields}
          }
        }
      }
    `;

    const variables = {
      input,
    };

    const result = await query({
      query: queryStr, 
      variables, 
      url: this._graphUrl,
      headers,
      key: "training.movies_remove",
      clean: true
    });

    return result
  }

}

module.exports = Movies;