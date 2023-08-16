const { query } = require('@simpleview/sv-graphql-client');

class People {
  constructor({ graphUrl, graphServer }) {
    this._graphUrl = graphUrl;
    this._graphServer = graphServer;
  }

  async find({ fields, context, input, headers}) {
    const query = `
      query People_find($input: training_people_find_input) {
        training {
          people_find(input: $input) {
            docs {
              last_name
              id
              first_name
              directed {
                title
                release_date
                id
              }
            }
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
      url: _graphUrl,
      headers,
      key: "training.people_find",
      clean: true
    });
  }

  async insert({ fields, context, input, headers}) {
    const query = `
      mutation People_insert($input: [training_people_insert_input!]!) {
        training {
          people_insert(input: $input) {
            message
            success
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
      url: _graphUrl,
      headers,
      key: "",
      clean: true
    });
  }

  async remove({ fields, context, input, headers}) {
    const query = `
      mutation People_remove($input: training_people_remove_input) {
        training {
          people_remove(input: $input) {
            message
            success
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
      url: _graphUrl,
      headers,
      key: "",
      clean: true
    });
  }

}

module.exports = People;