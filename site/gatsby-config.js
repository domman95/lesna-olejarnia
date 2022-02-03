require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'My Title',
    titleTemplate: '&s | Im always here!',
    description: 'Few the best words about the website!',
    url: 'https://localhost:8000',
    image: '/image.jpg',
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
