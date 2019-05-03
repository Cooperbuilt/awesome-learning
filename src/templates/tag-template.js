import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Courses from '../components/Courses';
import Page from '../components/Page';
import Pagination from '../components/Pagination';

const TagTemplate = ({ data, pageContext }) => {
  const {
    title: siteTitle,
    subtitle: siteSubtitle
  } = data.site.siteMetadata;

  const {
    tag,
    currentPage,
    prevPagePath,
    nextPagePath,
    hasPrevPage,
    hasNextPage
  } = pageContext;

  const { edges } = data.allMarkdownRemark;
  const pageTitle = currentPage > 0 ? `All Courses tagged as "${tag}" - Page ${currentPage} - ${siteTitle}` : `All Courses tagged as "${tag}" - ${siteTitle}`;

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <Sidebar />
      <Page title={tag}>
        <Courses edges={edges} />
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </Page>
    </Layout>
  );
};
// sort: { order: DESC, fields: [frontmatter___date] }
export const query = graphql`
  query TagPage($tag: String, $coursesLimit: Int!, $coursesOffset: Int!) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(
        limit: $coursesLimit,
        skip: $coursesOffset,
        filter: { frontmatter: { tags: { in: [$tag] }, template: { eq: "course" }, draft: { ne: true } } },
        
      ){
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            
            category
            description
          }
        }
      }
    }
  }
`;

export default TagTemplate;
