import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Lesson from '../components/Lesson';

const LessonTemplate = ({ data }) => {
  const {
    title: siteTitle,
    subtitle: siteSubtitle
  } = data.site.siteMetadata;

  const {
    title: lessonTitle,
    description: courseDescription
  } = data.markdownRemark.frontmatter;

  const metaDescription = courseDescription !== null ? courseDescription : siteSubtitle;

  return (
    <Layout title={`${lessonTitle} - ${siteTitle}`} description={metaDescription}>
      <Lesson lesson={data.markdownRemark} />
    </Layout>
  );
};

export const query = graphql`
  query LessonBySlug($slug: String!) {
    site {
      siteMetadata {
        author {
          name
          contacts {
            twitter
          }
        }
        disqusShortname
        subtitle
        title
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {  
        description
        course
        tags
        title
        exerciseLinks 
        timeToCompletion
        videoLinks,
        preReadQuizLink
        readingLinks {
          link 
          description
          title
        }
      }
    }
  }
`;

export default LessonTemplate;
