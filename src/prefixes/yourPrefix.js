const MoviesCollection = require('./collections/Movies');

class YourPrefix {
    constructor({ graphUrl, graphServer }) {
      this._name = "training";
      this._graphUrl = graphUrl;
      this._graphServer = graphServer;

      this.movies = new MoviesCollection({ _graphUrl, _graphServer });
    }
  }
  
  module.exports = YourPrefix;