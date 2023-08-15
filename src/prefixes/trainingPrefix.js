const Movies = require('./Movies');
const People = require('./People');

class TrainingPrefix {
    constructor({ graphUrl, graphServer }) {
      this._name = "training";
      this._graphUrl = graphUrl;
      this._graphServer = graphServer;

      this.movies = new Movies({ _graphUrl, _graphServer });
      this.people = new People({ _graphUrl, _graphServer });
    }
  }
  
  module.exports = TrainingPrefix;