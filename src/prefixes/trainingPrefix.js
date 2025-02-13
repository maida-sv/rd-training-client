const Movies = require('./collections/Movies');
const People = require('./collections/People');

class TrainingPrefix {
    constructor({ graphUrl, graphServer }) {
      this.name = "training";
      this._graphUrl = graphUrl;
      this._graphServer = graphServer;

      this.movies = new Movies({ graphUrl: this._graphUrl, graphServer: this._graphServer });
      this.people = new People({ graphUrl: this._graphUrl, graphServer: this._graphServer });
    }
  }
  
  module.exports = TrainingPrefix;