const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allSanityCategory {
          nodes {
            title
            slug {
              current
            }
            listOfProducts {
              id
              price
              name
              nutritional
              capacity
              composition
              image {
                asset {
                  id
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query');
  }

  const productTemplate = path.resolve(`src/templates/productTemplatePage.js`);
  result.data.allSanityCategory.nodes.forEach(
    ({ title, slug, listOfProducts }) => {
      console.log(slug.current);
      createPage({
        path: `/${slug.current}`,
        component: productTemplate,
        context: {
          products: [...listOfProducts],
          title: title,
        },
      });
    }
  );
};
