const { query } = require('@simpleview/sv-graphql-client');

class Movies {
  constructor({ graphUrl, graphServer }) {
    this._graphUrl = graphUrl;
    this._graphServer = graphServer;
  }

  async find({ fields, context, input, headers}) {
    const query = `
      query Movies_find($fields: String!, $context: String!, $input: training_movies_find_input) {
        training {
          movies_find(fields: $fields, context: $context, input: $input) {
            docs {
              title
              release_date
              id
              director {
                id
                first_name
                last_name
              }
              director_id
            }
          }
        }
      }
    `;

    const variables = {
      input,
    };

    const result = await query({
      query, 
      variables, 
      url: _graphUrl,
      headers,
      clean: true
    });

    return result.data.training.movies_find;
  }

  async insert({ fields, context, input, headers}) {
    const query = `
      mutation Movies_insert($input: [training_movies_insert_input!]!) {
        training {
          movies_insert(input: $input) {
            success
            message
          }
        }
      }
    `;

    const variables = {
      input,
    };

    const result = await query({
      query, 
      variables, 
      url: _graphUrl,
      headers,
      clean: true
    });

    return result.data.training.movies_insert;
  }

  async remove({ fields, context, input, headers}) {
    if (!input) {
      return res.json({ success: false, message: 'No input provided' });
    }
  
    try {
      input = JSON.parse(input);
    } catch (error) {
      return res.json({ success: false, message: 'Invalid JSON' });
    }
  
    if (!input.id) {
      return res.json({ success: false, message: 'No movie IDs provided' });
    }
  
    const query = `
      mutation Movies_remove($input: training_movies_remove_input) {
        training{
          movies_remove(input: $input) {
            success
            message
          }
        }
      }
    `;

    const variables = {
      input,
    };

    const result = await query({
      query, 
      variables, 
      url: _graphUrl,
      headers,
      clean: true
    });

    return result.data.training.movies_remove;
  }

}

module.exports = Movies;