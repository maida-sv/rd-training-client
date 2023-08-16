const { query } = require('@simpleview/sv-graphql-client');

class Movies {
  constructor({ graphUrl, graphServer }) {
    this.graphUrl = graphUrl;
    this.graphServer = graphServer;
  }

  async find({ fields, context, input, headers}) {
    const query = `
      query Movies_find($fields: String!, $context: String!, $input: training_movies_find_input) {
        training {
          movies_find(fields: $fields, context: $context, input: $input) {
            ${fields}
          }
        }
      }
    `;

    const variables = {
      input,
    };

    return result = await query({
      query, 
      variables, 
      url: this._graphUrl,
      headers,
      key: "",
      clean: true
    });
  }

  async insert({ fields, context, input, headers}) {
    const query = `
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

    return result = await query({
      query, 
      variables, 
      url: this._graphUrl,
      headers,
      key: "",
      clean: true
    });
  }

  async remove({ fields, context, input, headers}) {
    const query = `
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

    return result = await query({
      query, 
      variables, 
      url: this._graphUrl,
      headers,
      key: "",
      clean: true
    });
  }

}

module.exports = Movies;