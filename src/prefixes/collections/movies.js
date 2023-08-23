const { query } = require('@simpleview/sv-graphql-client');

class Movies {
  constructor({ graphUrl, graphServer }) {
    this._graphUrl = graphUrl;
    this._graphServer = graphServer;
  }

  async find({ fields, context, input, headers}) {
    const variables = {
      input,
    };

    const result = await query({
      query: `
        query Movies_find($input: training_movies_find_input) {
          training {
            movies_find(input: $input) {
              ${fields}
            }
          }
        }
      `, 
      variables, 
      url: this._graphUrl,
      headers,
      key: "training.movies_find",
      clean: true
    });

    return result
  }

  async insert({ fields, context, input, headers}) {
    const variables = {
      input,
    };

    const result = await query({
      query:`
        mutation Movies_insert($input: [training_movies_insert_input!]!) {
          training {
            movies_insert(input: $input) {
              ${fields}
            }
          }
        }
      `, 
      variables, 
      url: this._graphUrl,
      headers,
      key: "training.movies_insert",
      clean: true
    });

    return result
  }

  async populate({ fields, context, input, headers}) { 
    const result = await query({
      query: `
        mutation Movies_populate {
          training {
            movies_populate {      
				      success
				      message

            }
          }
        }
      `, 
      url: this._graphUrl,
      headers,
      key: "training.movies_populate",
      clean: true
    });

    console.log("libbbbbbb", result)
    return result
  }

  async remove({ fields, context, input, headers}) {
    const variables = {
      input,
    };

    const result = await query({
      query: `
        mutation Movies_remove($input: training_movies_remove_input) {
          training{
            movies_remove(input: $input) {
              ${fields}
            }
          }
        }
      `, 
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