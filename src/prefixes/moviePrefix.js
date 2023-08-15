const MoviesCollection = require('./collections/Movies');

class MoviePrefix {
    constructor({ graphUrl, graphServer }) {
      this._name = "training";
      this._graphUrl = graphUrl;
      this._graphServer = graphServer;

      this.movies = new MoviesCollection({ _graphUrl, _graphServer });
    }
  }
  
  module.exports = MoviePrefix;