require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Strona główna',
    titleTemplate: '%s | Leśna Olejarnia',
    description: 'Few the best words about the website!',
    url: 'https://localhost:8000',
    image: 'static/static.png',
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'qb0g51va',
        token: process.env.SANITY_TOKEN,
        dataset: 'production',
        watchMode: true,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
  ],
};
