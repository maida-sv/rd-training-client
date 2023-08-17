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
            ${fields}
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
      key: "training.people_find",
      clean: true
    });

    return result
  }

  async insert({ fields, context, input, headers}) {
    const query = `
      mutation People_insert($input: [training_people_insert_input!]!) {
        training {
          people_insert(input: $input) {
            ${fields}
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
      key: "training.people_insert",
      clean: true
    });

    return result
  }

  async remove({ fields, context, input, headers}) {
    const query = `
      mutation People_remove($input: training_people_remove_input) {
        training {
          people_remove(input: $input) {
            ${fields}
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
      key: "training.people_remove",
      clean: true
    });

    return result
  }

}

module.exports = People;