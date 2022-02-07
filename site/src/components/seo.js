import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

import appleTouchIcon from '../assets/favicon/apple-touch-icon.png';
import favicon32x32 from '../assets/favicon/favicon-32x32.png';
import favicon16x16 from '../assets/favicon/favicon-16x16.png';

export default function Seo({ title }) {
  const { site } = useStaticQuery(query);

  const {
    title: defaultTitle,
    titleTemplate,
    description,
    image,
  } = site.siteMetadata;

  const seo = {
    seoTitle: title || defaultTitle,
  };

  return (
    <Helmet title={seo.seoTitle} titleTemplate={titleTemplate}>
      {console.log(site)}
      <meta name="description" content={description} />
      {seo.image && <meta property="og:image" content={image} />}
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        image
      }
    }
  }
`;
