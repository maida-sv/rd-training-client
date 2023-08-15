const { query } = require('@simpleview/sv-graphql-client');

class People {
  constructor({ graphUrl, graphServer }) {
    this._graphUrl = graphUrl;
    this._graphServer = graphServer;
  }

  async find({ fields, context, input, headers}) {
  }

  async insert({ fields, context, input, headers}) {
  }

  async remove({ fields, context, input, headers}) {
  }

}

module.exports = People;