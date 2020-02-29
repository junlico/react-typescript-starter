const withSass = require('@zeit/next-sass');

module.exports = withSass({
  exportPathMap: () => {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
    };
  },
});

/**
 * const fetch = require('isomorphic-unfetch');
 * const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    const shows = data.map(entry => entry.show);

    shows.forEach(show => {
      paths[`/show/${show.id}`] = {
        page: '/show/[id]',
        query: { id: show.id },
      };
    });
 */
