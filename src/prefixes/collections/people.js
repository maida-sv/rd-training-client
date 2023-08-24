const { query } = require('@simpleview/sv-graphql-client');

class People {
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
      query People_find($input: training_people_find_input) {
          training {
            people_find(input: $input) {
              ${fields}
            }
          }
        }
      `, 
      variables, 
      url: this._graphUrl,
      headers,
      key: "training.people_find",
      clean: true
    });

    return result
  }

  async insert({ fields, context, input, headers}) {
    const variables = {
      input,
    };

    const result = await query({
      query: `
        mutation People_insert($input: [training_people_insert_input!]!) {
          training {
            people_insert(input: $input) {
              ${fields}
            }
          }
        }
      `, 
      variables, 
      url: this._graphUrl,
      headers,
      key: "training.people_insert",
      clean: true
    });

    return result
  }

  async populate({ fields, context, input, headers}) { 
    const result = await query({
      query: `
        mutation People_populate {
          training {
            people_populate {      
				      success
				      message

            }
          }
        }
      `, 
      url: this._graphUrl,
      headers,
      key: "training.people_populate",
      clean: true
    });

    return result
  }

  async remove({ fields, context, input, headers}) {
    const variables = {
      input,
    };

    const result = await query({
      query: `
        mutation People_remove($input: training_people_remove_input) {
          training {
            people_remove(input: $input) {
              ${fields}
            }
          }
        }
      `, 
      variables, 
      url: this._graphUrl,
      headers,
      key: "training.people_remove",
      clean: true
    });

    return result
  }

}

module.exports = People;