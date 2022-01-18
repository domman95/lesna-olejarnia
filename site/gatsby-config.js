module.exports = {
  siteMetadata: {
    title: 'My Title',
    titleTemplate: '&s | Im always here!',
    description: 'Few the best words about the website!',
    url: 'https://localhost:8000',
    image: '/image.jpg',
  },
  plugins: [
    // HEADLESS CMS: SANITY.IO - UNCOMMENT WHEN CREATED SANITY PROJECT
    // {
    //   resolve: 'gatsby-source-sanity',
    //   options: {
    //     projectId: 'xxx',
    //     token: '',
    //     dataset: 'production',
    //   },
    // },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
  ],
};
